import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OtpConfirmationUiPage } from '../otp-confirmation-ui/otp-confirmation-ui';
import { EmailLoginPage } from '../email-login/email-login';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

/**
 * Generated class for the OtpSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-signup',
  templateUrl: 'otp-signup.html',
})
export class OtpSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpSignupPage');
  }

  LoginWithOTP() {
    this.navCtrl.push(OtpConfirmationUiPage);
  }

  LoginWithFacebook() {
  }

  LoginWithEmail() {
    this.navCtrl.push(EmailLoginPage);
  }

  ForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
