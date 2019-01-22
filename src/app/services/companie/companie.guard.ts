import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import Swal from "sweetalert2";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanieGuard implements CanActivate {

  constructor(private userService: UserService) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.userService.stateChangedEmitter().subscribe( (data:any) => {
      console.log('emitter')
      console.log(data)
      if (data === true) {
        return true
      }else {
        Swal('Oops...', 'You can not edit this company because you are not the owner', 'error')
        return false
      }
    })
    // return this.userService.stateChangedEmitter().pipe(map((data:any) => {
    //   console.log( "guard data" , data)
    //   if (data) {
    //     console.log("guard true")
    //     return true
    //   }else {
    //     console.log("guard false")
    //     return false
    //   }
    // }))
  }
}
