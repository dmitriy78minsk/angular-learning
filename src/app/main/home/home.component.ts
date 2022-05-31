import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title = 'test-ang';
  public login: string = 'empty';

  public curDate = new Date();

  changeLogin(login: string) {
    this.login = login;
  }

}
