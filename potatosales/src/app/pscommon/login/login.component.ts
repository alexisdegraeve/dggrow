import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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

  checkLogin(loginForm: NgForm) {
    if(this.loginService.checkAccess(this.loginTxt, this.passwordTxt)) {
      this.router.navigate(['/welcome']);
    } else {
      loginForm.resetForm();
      this.errorLogin = true;
    }
  }


  resetError() {
    this.errorLogin =false;
  }

  
}
