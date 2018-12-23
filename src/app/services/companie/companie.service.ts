import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

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
}
