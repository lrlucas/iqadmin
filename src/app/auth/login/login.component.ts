import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import Swal from "sweetalert2";
import {UserService} from '../../services/user/user.service';
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public styleForm:string = 'block';
  public styleForm2:string = 'none';

  public UserEmailReset:string = '';

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, public userService: UserService) { }

  ngOnInit() {
    init_plugins();

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  public alternarEstilo() {
    this.styleForm = this.toggleStyle(this.styleForm)
    this.styleForm2 = this.toggleStyle(this.styleForm2)
  }

  public sendEmailAndReset(){

    if (this.UserEmailReset && this.UserEmailReset.includes('@')) {
      this.userService.resetPassword(this.UserEmailReset).subscribe((data:any) => {
        this.styleForm = this.toggleStyle(this.styleForm)
        this.styleForm2 = this.toggleStyle(this.styleForm2)
        console.log(data)
      })
    } else {
      Swal('Reset Error', 'Please enter your email to send your password', 'error');
    }

  }

  public toggleStyle(v) {
    return { block: 'none', none: 'block' }[v];
  }


  public submit() {

    if (this.loginForm.invalid) {
      return;
    }
    let user: any = this.loginForm.value;
    this.authService.login(user).subscribe((data: any) => {
      console.log(data)
    })

  }

}
