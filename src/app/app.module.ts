import { CategoryProvider } from './../providers/category';
import { FeedbackEndPage } from './../pages/feedback-end/feedback-end';
import { FeedbackCategoryPage } from './../pages/feedback-category/feedback-category';
import { FeedbackPage } from './../pages/feedback/feedback';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from "@angular/common/http";
import { FeedbackProvider } from '../providers/feedback/feedback';
import { HTTP } from "@ionic-native/http";

import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FeedbackPage,
    FeedbackCategoryPage,
    FeedbackEndPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FeedbackPage,
    FeedbackCategoryPage,
    FeedbackEndPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    FeedbackProvider,
    CategoryProvider,
    HTTP,
    InAppBrowser
  ]
})
export class AppModule {}
