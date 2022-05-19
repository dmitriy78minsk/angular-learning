import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseevent]'
})
export class MouseeventDirective {

  constructor(
    private readonly el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
