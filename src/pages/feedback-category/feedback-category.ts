import { FeedbackPage } from './../feedback/feedback';
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
  categoryList: any[]
  // categoryList = [
  //   {
  //     id: 1,
  //     name: '床品'
  //   },
  //   {
  //     id: 2,
  //     name: '卫生间'
  //   },
  //   {
  //     id: 3,
  //     name: '网速'
  //   },
  //   {
  //     id: 4,
  //     name: '噪声'
  //   },
  //   {
  //     id: 5,
  //     name: '服务态度'
  //   },
  //   {
  //     id: 6,
  //     name: '服务速度'
  //   },
  //   {
  //     id: 9999,
  //     name: '其它'
  //   }
  // ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private feedback: FeedbackProvider, private storage: Storage) {
    
  }

  ionViewDidLoad() {
    let array1 = []
    let array2 = []
    // this.storage.get('categoryList').then(res => {
    //   array1 = res.data
    //   this.storage.get('categoryListAll').then(res => {
    //     console.log(res.data);
        
    //     array2 = res.data
    //     for (let i = 0; i < array2.length; i++) {
    //       for (let j = 0; j < array1.length; j++) {
    //         if (array1[j].categoryId == array2[i].id ) {
              
    //           array1[j].name = array2[i].name
    //         }
    //       }
    //     }
    //     console.log(array1);
        
    //     this.categoryList = array1
    //   })
    // })
    this.storage.get('categoryList').then(res => {
      this.categoryList = res
    })
    setTimeout(res=> {
      this.navCtrl.push(FeedbackPage);
    }, 8000)
  }
  updateFeedback (category) {
    this.storage.get('id').then(res => {
      console.log(res)
      let tmpObj = {
        id: res,
        categoryName: category
      }

    this.feedback.update(tmpObj).subscribe(res => {
      console.log(res)
      this.navCtrl.push(FeedbackEndPage);
    })
    })
  }
}
