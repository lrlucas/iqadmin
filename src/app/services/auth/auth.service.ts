import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import Swal from "sweetalert2";
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false;

  private url: string = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getUserLogin';

  constructor(private http: HttpClient, public router: Router) { }

  public login (usuario: any) {
    let dataForm = new FormData();
    dataForm.append('email', usuario.email);
    dataForm.append('password', usuario.password);

    return this.http.post(this.url,dataForm).pipe(
      map( (data: any) => {
        if (data.errNum === "200") {
          this.isLogged = true;
          this.router.navigate(['/dashboard']);
          Swal('Login Successful', 'User successfully entered', 'success');
          this.saveLocalStorage('UserGUID', data.UserGUID);
          this.saveLocalStorage('CompanyGUID', data.CompanyGUID);
          return data;
        } else if(data.errNum === "99") {
          Swal('Login Error', 'Email/Password incorrect', 'error');
          console.log(data);
        }
      }), catchError((err: any) => {
        if (err) {
          console.log(err);
          return throwError(err);
        }
      })
    )
  }

  public logout() {
    this.isLogged = false;
    this.router.navigate(['/login']);
  }

  public logged(): boolean{
    let resul = localStorage.getItem('UserGUID')
    if (resul) {
      return true
    }else {
      return false;
    }
  }



  private saveLocalStorage(key: string, value: any ) {
    localStorage.setItem(key, value)
  }

  private getLocalStorage(key: any) {
    return localStorage.getItem(key);
  }


}
