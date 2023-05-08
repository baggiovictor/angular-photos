import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/services/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private plaformService: PlatformDetectorService = inject(
    PlatformDetectorService
  );

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authService
      .authenticate(
        this.loginForm.get('userName')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(
        () =>
          this.router.navigate(['user', this.loginForm.get('userName')?.value]),
        (err) => {
          console.log(err);
          this.loginForm.reset();
          this.plaformService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      );
  }
}
