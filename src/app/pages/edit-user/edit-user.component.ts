import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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


  constructor(public activatedRoute: ActivatedRoute, public userService: UserService ) {
    this.activatedRoute.params.subscribe( (data: any) => {
      this.userId = data.id;
      this.userService.getUser(data.id).subscribe( (data: any) => {
        this.firstname = data.FirstName;
        this.lastname = data.LastName;
        this.useremail = data.Email;
        this.department = data.Department;
        this.birthyear = data.BirthYear;
        this.jobfunction = data.Function;
        this.companyId = data.CompanyGUID;
        this.companyName = data.CompanyName;

      })
    })

    // get basic info
    this.userService.getBasicInfo().subscribe( (data: any) => {
      this.departamentSelect = data;
    })

  }

  ngOnInit() {
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

    this.userService.updateUser(user).subscribe( (data:any) => {
      console.log(data)
    })
  }

}
