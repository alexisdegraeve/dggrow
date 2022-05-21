import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthorized = false;

  constructor() { }

  checkLogin(login: string, pwd:string) {
    return this.isAuthorized = login === 'potato' && pwd =='1234';
  }
}
