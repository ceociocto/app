import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FeedbackPage } from './../feedback/feedback';
import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {
    username: '',
    password:''
  }
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private storage: Storage, private login: LoginProvider,
    private iab: InAppBrowser) {

  }
  ionViewDidLoad() {
    this.storage.remove('user')
    this.storage.remove('token')
  }
  onLogin(user) {
    this.login.login(user).subscribe(res => {
      if(res.status) {
        console.log(res.message)
        let toast = this.toastCtrl.create({
          message: res.message,
          position: 'middle',
          duration: 3000
        });
        toast.present();
      }
      if(res.token) {
      this.storage.set('token', res.token)
      this.storage.set('user', res.user)
      this.storage.set('shopId', res.user.shopId)
      this.navCtrl.push(FeedbackPage)
      }
    })
  }
  downloadApp() {
    this.iab.create("https://study2.lijian.ink/hp.apk")
    // window.open("https://study2.lijian.ink/hp.apk", '_system', 'location=yes');
  }
  downloadAndroid() {
    // navigator.app.loadUrl("https://study2.lijian.ink/hp.apk", {openExternal : true})
  }
}
