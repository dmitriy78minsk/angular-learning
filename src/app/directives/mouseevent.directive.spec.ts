import { ElementRef } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MouseeventDirective } from './mouseevent.directive';
export class MockElementRef extends ElementRef {}

describe('MouseeventDirective', () => {
  let directive: MouseeventDirective;
  const viewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['clear', 'createEmbeddedView']);
  const templateRef = jasmine.createSpyObj('TemplateRef', ['random']);
  
  beforeEach(() => {
    directive = new MouseeventDirective(viewContainerRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
