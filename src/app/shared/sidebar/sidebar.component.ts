import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public compGUID: string;
  autorizado:boolean = false;
  public username:string = "";


  constructor(private userService: UserService, public router: Router) {

  }

  ngOnInit() {
    this.getCompGUID();
    this.userService.stateChangedEmitter().subscribe(data => {
      this.autorizado = data;
    });
    let userGuid = localStorage.getItem('UserGUID');
    this.userService.getUser(userGuid).subscribe( (userData: any) => {
      this.username = `${this.capitalizeFirstLetter(userData.FirstName)} ${this.capitalizeFirstLetter(userData.LastName)}`;
    })
  }

  // funcion para convertir la primera letra a mayuscula
  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  public getCompGUID() {
    this.compGUID =  localStorage.getItem('CompanyGUID');
  }

  public removeLocalStorage() {
    localStorage.removeItem('UserGUID');
    localStorage.removeItem('CompanyGUID');
  }

  public logout() {
    this.removeLocalStorage();
    this.router.navigate(['/login'])
  }

}
