import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.css']
})
export class EditMyProfileComponent implements OnInit {

  firstname: string;
  lastname: string;
  useremail: string;
  department: string;
  birthyear: string;
  jobfunction: string;
  userId: string;
  companyId: string;
  companyName: string;

  departamentSelect = [];

  //variable para comparar el owner de la empresa
  public comparar: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userId = localStorage.getItem('UserGUID');
    if (this.userId.length > 0){
      this.userService.getUser(this.userId).subscribe( (data: any) => {
        this.firstname = data.FirstName;
        this.lastname = data.LastName;
        this.useremail = data.Email;
        this.department = data.Department;
        this.birthyear = data.BirthYear;
        this.jobfunction = data.Function;
        this.companyId = data.CompanyGUID;
        this.companyName = data.CompanyName;
        this.comparar = data.Function;

      });
    }else {
      return console.log("UserGUID No encontrado");
    }

    // get basic info
    this.userService.getBasicInfo().subscribe( (data: any) => {
      this.departamentSelect = data;
    })
  }

  selectedDepartament(event) {
    this.department = event.target.value;

  }

  updateUser() {
    let idDepartament = this.departamentSelect.filter( depart => {
      return depart.Name === this.department
    });

    let user = {
      UserGUID: this.userId,
      FirstName: this.firstname,
      LastName: this.lastname,
      userEmail: this.useremail,
      CompanyGUID: this.companyId,
      CompanyName: this.companyName,
      DepartmentID: idDepartament[0].ID,
      BirthYear: this.birthyear,
      JobFunction: this.jobfunction,
      Newsletter: '0'
    };
    //
    // console.log('comparar')
    // console.log(this.jobfunction)
    let modificar = false;

    if (this.jobfunction.toLowerCase().includes("owner")){
      modificar = true;
      // console.log("se va a mandar esto", modificar)
      // console.log("se modifico y tiene la palabra owner")
    }else {
      console.log("se modifico peor NO contiene la palabra owner")
    }



    this.userService.updateUser(user, modificar).subscribe( (data:any) => {
      // console.log(data)
    })
  }

  cancelEdit() {
    this.router.navigate(['/']);

  }

}
