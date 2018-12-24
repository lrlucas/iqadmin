import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user-of-companie',
  templateUrl: './user-of-companie.component.html',
  styleUrls: ['./user-of-companie.component.css']
})
export class UserOfCompanieComponent implements OnInit {
  users = [];

  constructor( public activeRouter: ActivatedRoute, public userService: UserService) {
    this.activeRouter.params
      .subscribe( (data: any) => {
        this.userService.getAllUsersCompany('D4369C31-8245-46D0-968C-0F31532C7238', data.IDComp)
          .subscribe( (data: any) => {
            console.log(data)
            this.users = data;
            console.log(this.users)
          })
      })
  }

  ngOnInit() {
  }

}
