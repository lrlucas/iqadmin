import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class UserService {

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


  updateUser(user: any) {
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
        Swal('Update Completed...', 'User successfully updated', 'success')
        return data
      })
    )
  }
}
