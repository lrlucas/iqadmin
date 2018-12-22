import { Component, OnInit } from '@angular/core';
import {CompanieService} from '../../services/companie/companie.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies = [];

  constructor( public companieService: CompanieService) {
    this.companieService.getAllCompanies('D4369C31-8245-46D0-968C-0F31532C7238')
      .subscribe( data => {
        this.companies = data
        console.log(this.companies)
      })
  }

  ngOnInit() {
  }


}
