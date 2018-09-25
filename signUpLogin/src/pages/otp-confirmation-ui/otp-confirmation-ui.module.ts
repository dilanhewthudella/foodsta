import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpConfirmationUiPage } from './otp-confirmation-ui';

@NgModule({
  declarations: [
    OtpConfirmationUiPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpConfirmationUiPage),
  ],
})
export class OtpConfirmationUiPageModule {}
