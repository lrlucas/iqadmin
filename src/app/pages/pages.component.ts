import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    init_plugins();
    this.userService.verifyOwner().subscribe((data: any) => {
      
    })
  }

}
