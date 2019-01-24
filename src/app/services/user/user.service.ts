import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isOwner: boolean = false;
  stateOfOwnerChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http:HttpClient) {

  }

  getAllUsersCompany(adminGUID: string, compGUID: string) {
    let url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getAllUsersCompany';
    let dataForm = new FormData();
    dataForm.append('adminGUID', adminGUID);
    dataForm.append('compGUID', compGUID);
    return this.http.post(url, dataForm).pipe(
      map( (data: any) => {
        return data.arrUsers;
      })
    )
  }


  getUser(id: string) {
    let url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getUser';
    let dataForm = new FormData();
    dataForm.append('userGUID', id);
    return this.http.post(url, dataForm).pipe(
      map((data: any) => {
        return data;
      })
    )
  }

  verifyOwner() {
    let url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getUser';
    let userId = localStorage.getItem('UserGUID');
    let dataForm = new FormData();
    dataForm.append('userGUID', userId);
    return this.http.post(url, dataForm).pipe(
      map((data: any) => {
        let userIsOwner = data.Function;
        userIsOwner = userIsOwner.toLowerCase().includes("owner");
        this.isOwner = userIsOwner;
        this.stateOfOwnerChanged.emit(this.isOwner)

      })
    )
  }


  getBasicInfo() {
    let url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/getBasicInfo';
    let dataForm = new FormData();
    dataForm.append('CompGUID', '1');
    return this.http.post(url, dataForm).pipe(
      map( (data: any) => {
        return data.OptionsDepartment;
      })
    )
  }


  updateUser(user: any, modificar: boolean) {

    let url = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/updateUser';
    let dataForm = new FormData();
    dataForm.append('userGUID', user.UserGUID);
    dataForm.append('FirstName', user.FirstName);
    dataForm.append('LastName', user.LastName);
    dataForm.append('userEmail', user.userEmail);
    dataForm.append('compGUID', user.CompanyGUID);
    dataForm.append('DepartmentID', user.DepartmentID);
    dataForm.append('BirthYear', user.BirthYear);
    dataForm.append('JobFunction', user.JobFunction);
    dataForm.append('Newsletter', user.Newsletter);
    return this.http.post(url, dataForm).pipe(
      map( (data:any) => {
        console.log("servicio cambiado", modificar)
        if (modificar === true) {
          this.isOwner = true
          this.stateOfOwnerChanged.emit(this.isOwner)
        }else {
          this.isOwner = false;
          this.stateOfOwnerChanged.emit(this.isOwner)
        }
        Swal('Update Completed...', 'User successfully updated', 'success')
        return data
      })
    )
  }

  public resetPassword(email: string) {
    let url: string = 'https://digitaliq.onsfotoboek.nl/5thAPI.php/resetPassword';
    let dataForm = new FormData();
    dataForm.append('userEmail', email);
    return this.http.post(url, dataForm).pipe(
      map( (data: any) => {
        if (data.errNum === '200') {
          Swal('Password sent please check your email', 'E-mail with new password has been sent', 'success')
          return data
        }
      }),catchError(err => {
        console.log(err)
        Swal('Rrror when sending password...', 'Please try again', 'error')
        throw err
      })
    )
  }



  public stateChangedEmitter() {
    return this.stateOfOwnerChanged;
  }
}
