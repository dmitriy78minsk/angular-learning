import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Output() onChangeLogin = new EventEmitter<string>();

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
    .subscribe
      (
        {
          next: (value: string) => {
            console.log('login:', value);
            this.onChangeLogin.emit(value);
          },
          error: (error: any) => {  },
          complete:  () => { console.log('end subscribe') }
        }
      )
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
