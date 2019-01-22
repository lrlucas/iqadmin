import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    init_plugins();

    this.loginForm = this.formBuilder.group({
      email: ['lucas.suarez.dev@gmail.com', Validators.required],
      password: ['hbk9874v', Validators.required],
      check: [false]
    })

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
