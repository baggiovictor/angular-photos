import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]',
  standalone: true,
})
export class DarkenOnHoverDirective {
  @Input() brightness = '70%';

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
