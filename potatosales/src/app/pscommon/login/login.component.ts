import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/psservice/login.service';

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  loginTxt = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.loginService.checkAccess(this.loginTxt, this.password)) {
      console.log('Login');      
      this.router.navigate(['/welcome']);
    }

  }
}
