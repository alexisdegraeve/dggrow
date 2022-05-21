import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkAccess(login: string, pwd:string) {
    let accessOK =  (login == 'potato' && pwd =='1234');
    if(accessOK) {
      let user = {login : 'potato', pwd :'1234'};
      localStorage.setItem('potatoUser', JSON.stringify(user));    
    }
    return accessOK;
  }

  checkLoginFromCache() {
    let potatoUser = localStorage.getItem('potatoUser');    
    if(potatoUser) {
      let user = JSON.parse(potatoUser);
      return (user.login == 'potato' && user.pwd =='1234');
    }
    return false;
  }


  resetUser() {
    localStorage.removeItem('potatoUser');    
  }
}
