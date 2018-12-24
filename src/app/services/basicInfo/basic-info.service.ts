import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BasicInfoService {

  constructor(private http:HttpClient) { }

  getBasicInfo() {
    let url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getBasicInfo'
    let dataForm = new FormData();
    dataForm.append('CompGUID', '1');
    return this.http.post(url, dataForm).pipe(
      map( data => {
        return data;
      })
    )
  }
}
