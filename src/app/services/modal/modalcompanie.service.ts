import { Injectable } from '@angular/core';

@Injectable()
export class ModalcompanieService {

  companyName: string = '';
  ownerName: string = '';

  constructor() { }


  modalSet(companyName: any) {
    this.companyName = companyName.CompanyName;
    this.ownerName = companyName.OwnerName;
    console.log('servide modal')
    console.log(this.companyName)
    console.log(this.ownerName)
  }
}
