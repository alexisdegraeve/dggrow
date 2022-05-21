import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/psservice/login.service';

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordTxt = '';
  loginTxt = '';
  errorLogin = false;

  constructor(private loginService: LoginService, private router: Router) { 
  }

  ngOnInit(): void {

  }

  checkLogin() {
    if(this.loginService.checkAccess(this.loginTxt, this.passwordTxt)) {
      console.log('Login');      
      this.router.navigate(['/welcome']);
    } else {
      this.errorLogin = true;
    }

  }

  resetError() {
    this.errorLogin =false;
  }

  
}
