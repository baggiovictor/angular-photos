import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-message-error',
  template: ` <small class="text-danger d-block mt-2"> {{ text }} </small>`,
})
export class VMessageError {
  @Input() text: string = '';
}
