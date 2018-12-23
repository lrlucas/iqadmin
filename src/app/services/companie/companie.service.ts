import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CompanieService {
  url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getAllCompanies';

  constructor(private http: HttpClient) { }

  getAllCompanies(idAdmin: any) {
    let dataForm = new FormData();
    dataForm.append('adminGUID', idAdmin);
    return this.http.post(this.url, dataForm).pipe(
      map( (data: any) => {
        return data.arrCompanies;
      })
    )
  }


  getCompanie(id: string) {
    let url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getCompany';
    let dataForm = new FormData();
    dataForm.append('compGUID', id);
    return this.http.post(url, dataForm).pipe(
      map( data => {
        return data;
      })
    )
  }

  updateCompanie(companie: any) {
    let url: string = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/updateCompany';
    let dataForm = new FormData();
    dataForm.append('compGUID', companie.compGUID);
    dataForm.append('userGUID', companie.userGUID);
    dataForm.append('CountryID', companie.countryId);
    dataForm.append('SectorID', companie.sectorId);
    dataForm.append('CompanyName', companie.companieName);
    dataForm.append('Employees', companie.employees);
    dataForm.append('Market', companie.market);
    dataForm.append('MaxUsers', companie.maxUser);
    dataForm.append('MaxDate', companie.maxDate);
    return this.http.post(url, dataForm).pipe(
      map( data => {
        Swal('Update Completed...', 'Company successfully updated', 'success')
        return data;
      })
    )

  }



}
