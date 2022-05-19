import { PermsDirective } from './perms.directive';

describe('PermsDirective', () => {
  let directive: PermsDirective;
  const viewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['clear', 'createEmbeddedView']);
  const templateRef = jasmine.createSpyObj('TemplateRef', ['random']);
  
  beforeEach(() => {
    directive = new PermsDirective(viewContainerRef, templateRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
