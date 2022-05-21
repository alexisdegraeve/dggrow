import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/psservice/login.service';

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  loginTxt = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    console.log('check loggin :' ,this.loginService.checkLogin(this.loginTxt, this.password));
    console.log('Login');
  }
}
