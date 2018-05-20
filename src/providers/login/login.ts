import { AppConfig } from './../../app.conf';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }
  login(user) {
    // user = {
    //   username: 'shop1',
    //   password: '111'
    // }
    // return <any> this.http.post(AppConfig.getPrudUrl() +  '/api/managers/login', user)
    return <any> this.http.post('https://study2.lijian.ink/api/managers/login', user)
    // return <any> this.http.post('http://127.0.0.1:3003/api/managers/login', user)
      .map(res => {
        console.log(res)
        return res
      })
  }

}
