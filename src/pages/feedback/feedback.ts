import { HomePage } from './../home/home';
import { FeedbackCategoryPage } from './../feedback-category/feedback-category';
import { Storage } from '@ionic/storage';
import { FeedbackProvider } from './../../providers/feedback/feedback';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private feedback: FeedbackProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
    this.storage.get('user').then(res => {
      console.log(res)
      if (!res) {
        this.navCtrl.push(HomePage)
      }
    })
    this.storage.remove('feedback')
  }

  createFeedback(rate) {
    this.storage.get('user').then((res) => {
    var obj = {
      shopId: res.shopId,
      rate: rate
    }
    this.storage.set('feedback', obj)
    this.feedback.create(obj).subscribe((res: any) => {
      console.log(res)
      this.storage.set('id', res.id)
      this.navCtrl.push(FeedbackCategoryPage);
      console.log('not here...')
    })
    });
  }

}
