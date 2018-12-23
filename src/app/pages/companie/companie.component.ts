import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanieService} from '../../services/companie/companie.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BasicInfoService} from '../../services/basicInfo/basic-info.service';

@Component({
  selector: 'app-companie',
  templateUrl: './companie.component.html',
  styleUrls: ['./companie.component.css']
})
export class CompanieComponent implements OnInit {
  companie:any = [];

  companieName: string;
  ownerName: string;
  country: string;
  industry: string;
  employees: string;
  market: string;
  createDate: string;
  maxUser: string;
  maxDate: string;


  countrySelect = [];


  constructor(public router: Router,
              public activeRouter: ActivatedRoute,
              public companieService: CompanieService,
              public basicInfo: BasicInfoService ) { }

  ngOnInit() {
    this.activeRouter.params
      .subscribe(data => {
        console.log(data.id)
        this.companieService.getCompanie(data.id)
          .subscribe( (data:any) => {
            this.companie = data;
            this.companieName = data.CompanyName;
            this.ownerName = data.OwnerName;
            this.country = data.Country;
            this.industry = data.Industry;
            this.employees = data.Employees;
            this.market = data.Market;
            this.createDate = data.CreateDate;
            this.maxUser = data.MaxUsers;
            this.maxDate = data.MaxDate;
            console.log(data)
          })
      })
    // get BasicInfo
    this.basicInfo.getBasicInfo()
      .subscribe( (data:any) => {
        console.log(data)
        console.log(data.OptionsCountry)
        this.countrySelect = data.OptionsCountry;
      })

  }

  selectedCountry(event) {
    console.log('que sera')
    console.log(event)
  }


  updateCompany() {
    let companie = {
      companieName: this.companieName,
      ownerName: this.ownerName,
      country: this.country,
      industry: this.industry,
      employees: this.employees,
      market: this.market,
      createDate: this.createDate,
      maxUser: this.maxUser,
      maxDate: this.maxDate
    }
    console.log(companie)
  }

}
