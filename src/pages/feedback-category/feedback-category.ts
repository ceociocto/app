import { FeedbackEndPage } from './../feedback-end/feedback-end';
import { FeedbackProvider } from './../../providers/feedback/feedback';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FeedbackCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-category',
  templateUrl: 'feedback-category.html',
})
export class FeedbackCategoryPage {
  categoryList = [
    {
      id: 0,
      name: '态度'
    },
    {
      id: 1,
      name: '菜品'
    },
    {
      id: 2,
      name: '环境'
    },
    {
      id: 3,
      name: '时间'
    },
    {
      id: 4,
      name: '其它'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private feedback: FeedbackProvider, private storage: Storage) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackCategoryPage');
  }
  updateFeedback (category) {
    this.storage.get('id').then(res => {
      console.log(res)
      let tmpObj = {
        id: res,
        category: category.id
      }

    this.feedback.update(tmpObj).subscribe(res => {
      console.log(res)
      this.navCtrl.push(FeedbackEndPage);
    })
    })
  }
}
