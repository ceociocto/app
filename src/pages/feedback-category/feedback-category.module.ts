import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackCategoryPage } from './feedback-category';

@NgModule({
  declarations: [
    FeedbackCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackCategoryPage),
  ],
})
export class FeedbackCategoryPageModule {}
