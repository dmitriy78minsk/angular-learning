import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { UsersService } from 'src/app/models/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit, OnDestroy {

  constructor(
    private readonly userServise: UsersService
  ) { }

  ngOnInit(): void {
    this.userServise.loadPosts()
    .pipe(untilDestroyed(this))
    .subscribe((data: any) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    
  }

}
