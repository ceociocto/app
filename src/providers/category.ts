import { AppConfig } from './../app.conf';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FeedbackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {
  httpOptions = {
  };
  constructor(public http: HttpClient, private storage: Storage) {
    this.storage.get('token').then(res => {
      console.log(res)
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + res
        })}
      })

      
  }
  getListAll() {
    return this.http.get(AppConfig.getPrudUrl() + '/api/category/list', this.httpOptions)
      .map(res => {
        return res
      })
  }
  getList(shopId) { 
    return this.http.get(AppConfig.getPrudUrl() + '/api/shop/' + shopId + '/category/list', this.httpOptions)
      .map(res => {
        return res
      })
  }
}
