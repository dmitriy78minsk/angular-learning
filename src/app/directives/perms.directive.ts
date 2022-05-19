import { Directive, ElementRef, HostListener, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPerms]'
})
export class PermsDirective implements OnChanges{
  @Input() appPerms = '';
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>,
  ) { }

  ngOnChanges() {
    this.viewContainerRef.clear();
    if (this.appPerms === 'admin') {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
