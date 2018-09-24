import { AppConfig } from './../../app.conf';
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
export class FeedbackProvider {
  httpOptions = {
  };
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello FeedbackProvider Provider');
    this.storage.get('token').then(res => {
      console.log(res)
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + res
        })}
      })

      
  }
  create(obj) {
    return this.http.post(AppConfig.getPrudUrl() + '/api/posts', obj, this.httpOptions)
      .map(res => {
        return res
      })
  }
  update(obj) {
    return this.http.put(AppConfig.getPrudUrl() + '/api/posts/' +obj.id , obj, this.httpOptions)
      .map(res => {
        return res
      })
  }

}
