import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public compGUID: string;
  autorizado:boolean = false;


  constructor(private userService: UserService) {
    this.userService.stateChangedEmitter().subscribe(data => {
      this.autorizado = data;
    })
  }

  ngOnInit() {
    this.getCompGUID();
  }


  public getCompGUID() {
    this.compGUID =  localStorage.getItem('CompanyGUID');
  }

}
