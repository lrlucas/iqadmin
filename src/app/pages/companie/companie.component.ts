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

  compGUID: string;
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
  sectorSelect = [];
  marketSelect = [];


  constructor(public router: Router,
              public activeRouter: ActivatedRoute,
              public companieService: CompanieService,
              public basicInfo: BasicInfoService ) { }

  ngOnInit() {
    this.activeRouter.params
      .subscribe(data => {
        this.companieService.getCompanie(data.id)
          .subscribe( (data:any) => {
            this.companie = data;
            this.compGUID = data.CompanyGUID;
            this.companieName = data.CompanyName;
            this.ownerName = data.OwnerName;
            this.country = data.Country;
            this.industry = data.Industry;
            this.employees = data.Employees;
            this.market = data.Market;
            this.createDate = data.CreateDate;
            this.maxUser = data.MaxUsers;
            this.maxDate = data.MaxDate;
          })
      })
    // get BasicInfo
    this.basicInfo.getBasicInfo()
      .subscribe( (data:any) => {
        this.countrySelect = data.OptionsCountry;
        this.sectorSelect = data.OptionsSector;
        this.marketSelect = data.OptionsMarket;
      })

  }

  selectedCountry(event) {
    this.country = event;
  }

  selectedIndustry(event) {
    this.industry = event.target.value;
  }

  selectedMarket(event) {
    this.market = event.target.value;
  }


  updateCompany() {
    let idCountry = this.countrySelect.filter( country => {
      return country.Name === this.country
    });

    let sectorId = this.sectorSelect.filter( sector => {
      return sector.Name === this.industry
    });

    let marketUppercase = this.market.charAt(0).toUpperCase() + this.market.slice(1);

    let marketId = this.marketSelect.filter( market => {
      return market.Name === marketUppercase
    });

    let companie = {
      compGUID: this.compGUID,
      userGUID: 'D4369C31-8245-46D0-968C-0F31532C7238',
      companieName: this.companieName,
      countryId: idCountry[0].ID,
      sectorId: sectorId[0].ID,
      employees: this.employees,
      market: marketId[0].ID,
      maxUser: this.maxUser,
      maxDate: this.maxDate
    };
    this.companieService.updateCompanie(companie)
      .subscribe( data => {
        console.log(data)
      })

  }

}
