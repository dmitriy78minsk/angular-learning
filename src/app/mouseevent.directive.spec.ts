import { ElementRef } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MouseeventDirective } from './mouseevent.directive';
export class MockElementRef extends ElementRef {}

xdescribe('MouseeventDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        //more providers
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
  }));

  it('should create an instance', () => {
    // const directive = new MouseeventDirective();
    // expect(directive).toBeTruthy();
  });
});
