import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageError } from '../shared/components/vmessage/vmessage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageError, RouterModule],
  declarations: [SigninComponent],
})
export class HomeModule {}
