import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent implements OnInit, OnDestroy {

  @Input() caption = '';

  private subs: Subscription | undefined;

  email = new FormControl('', [Validators.required, Validators.email]);

  public viewModel = new FormGroup (
    {
      login: new FormControl(null, Validators.required)
    });

  constructor(
    private readonly cd: ChangeDetectorRef
  ) {
   }

  ngOnInit(): void {
    this.subs = this.viewModel.controls['login'].valueChanges.
    pipe(untilDestroyed(this))
    .subscribe((value: string) => {
      console.log('login:', value),
      (error: any) => {

      },
      () => {
        console.log('end subscribe')
      }
    })
  }

   validateAllFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.updateValueAndValidity({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
        control.updateValueAndValidity({ onlySelf: true });
      } else if (control instanceof FormArray) {
        this.validateAllFields(control);
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    formGroup.updateValueAndValidity({ onlySelf: true });
  }

  save(name: string) {
    debugger
    this.viewModel.markAllAsTouched();
    this.email.markAllAsTouched();
    this.cd.detectChanges();
    console.log(name);
    console.log(this.viewModel.get('login')?.value)
    console.log(this.viewModel.getRawValue())
  }

  ngOnDestroy(): void {
    
  }

  unsubscribe() {
     this.subs?.unsubscribe();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
