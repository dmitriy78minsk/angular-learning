import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component404 } from './components/component404/component404.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/maincomponent/maincomponent.component';
import { RxjsComponent } from './main/rxjs/rxjs/rxjs.component';

const childrenRoutes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },


];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: childrenRoutes,
    // canActivateChild: [AuthGuard],
    // TODO load privileges at once in parent and update it by expired token
  },
  {
      path: '**', 
      component: Component404
  }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
