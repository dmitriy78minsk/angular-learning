import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'test-ang';
  public login: string = 'empty';

  public curDate = new Date();

  changeLogin(login: string) {
    this.login = login;
  }
}
