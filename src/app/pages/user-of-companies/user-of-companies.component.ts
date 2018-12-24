import { Component, OnInit } from '@angular/core';
import {CompanieService} from '../../services/companie/companie.service';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-of-companies',
  templateUrl: './user-of-companies.component.html',
  styleUrls: ['./user-of-companies.component.css']
})
export class UserOfCompaniesComponent implements OnInit {
  companies = [];

  constructor(public companieService: CompanieService,
              public userService: UserService,
              public router: Router) {
    this.companieService.getAllCompanies('D4369C31-8245-46D0-968C-0F31532C7238')
      .subscribe( data => {
        this.companies = data;
        console.log(this.companies)
      });
  }

  ngOnInit() {
  }

  seeUser(idComp: string) {
    this.router.navigate(['/companyUsers', {IDComp: idComp}])
  }

}
