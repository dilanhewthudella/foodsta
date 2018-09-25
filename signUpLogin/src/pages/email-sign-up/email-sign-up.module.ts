import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailSignUpPage } from './email-sign-up';

@NgModule({
  declarations: [
    EmailSignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailSignUpPage),
  ],
})
export class EmailSignUpPageModule {}
