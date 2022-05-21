import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/psservice/login.service';

@Component({
  selector: 'ps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  signout() {
    this. loginService.resetUser();
    this.router.navigate(['/login']);
  }
}
