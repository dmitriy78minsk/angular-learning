import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementComponent } from './components/element/element.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './components/userlist/userlist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateLocalizePipe } from './pipes/date-localize.pipe';
import { MouseeventDirective } from './directives/mouseevent.directive';
import { PermsDirective } from './directives/perms.directive';
import { JwtInterceptorService } from './interceptors/jwt.interceptor.service';
import { MainComponent } from './main/maincomponent/maincomponent.component';
import { HomeComponent } from './main/home/home.component';
import { MatMenuModule} from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { RxModule } from './main/rxjs/rx.module';
import { Component404 } from './components/component404/component404.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    PermsDirective,
    MouseeventDirective,
    DateLocalizePipe,
    UserlistComponent,
    MainComponent,
    HomeComponent,
    Component404
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    RxModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}
  ],
  // exports: [
  //   PermsDirective
  // ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
