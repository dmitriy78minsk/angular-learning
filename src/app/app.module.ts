import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementComponent } from './components/element/element.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PermsDirective } from './perms.directive';
import { MouseeventDirective } from './mouseevent.directive';
import { DateLocalizePipe } from './date-localize.pipe';
import { UserlistComponent } from './components/userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    PermsDirective,
    MouseeventDirective,
    DateLocalizePipe,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  // exports: [
  //   PermsDirective
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
