import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { FeedbackPage } from './../pages/feedback/feedback';
import { AppUpdate } from '@ionic-native/app-update';


// Declare the TestFairy instance
// declare var TestFairy: any;
var APIUrl = '/myproxies';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FeedbackPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private appUpdate: AppUpdate
    ) {
    
    if (this.platform.is('core') == true){
        APIUrl = '';

    // 检查更新
    const updateUrl = 'https://study2.lijian.ink/update.xml';
    // this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });

    }else{
        APIUrl = 'http://study2.lijian.ink';
        platform.ready().then(() => {
          // TestFairy.begin("0c8a37648cf45be9b7db12c4728b3ca6ba93d0fd");
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          // statusBar.styleDefault();
          // splashScreen.hide();
        });
    }
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '评价', component: FeedbackPage },
      { title: '退出', component: HomePage },
    ];
  }

  initializeApp() {
    console.log(this.platform.platforms())
    console.log(this.platform.is('core'))
    // console.log(this.platform.is('/myproxy'))
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
