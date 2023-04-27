import { CommonModule } from '@angular/common';
import { Component, Input, Type } from '@angular/core';

const IMPORTS = [CommonModule];

@Component({
  standalone: true,
  selector: 'app-card',
  imports: [IMPORTS],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title: string = '';
}
