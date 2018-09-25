import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpSignupPage } from './otp-signup';

@NgModule({
  declarations: [
    OtpSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpSignupPage),
  ],
})
export class OtpSignupPageModule {}
