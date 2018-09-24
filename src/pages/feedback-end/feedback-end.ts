import { FeedbackPage } from './../feedback/feedback';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedbackEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-end',
  templateUrl: 'feedback-end.html',
})
export class FeedbackEndPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackEndPage');
    setTimeout(res=> {
      this.navCtrl.push(FeedbackPage);
    }, 6000)
  }

}
