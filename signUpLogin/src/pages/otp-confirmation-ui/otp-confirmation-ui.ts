import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompleteProfilePage } from '../complete-profile/complete-profile';

/**
 * Generated class for the OtpConfirmationUiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-confirmation-ui',
  templateUrl: 'otp-confirmation-ui.html',
})
export class OtpConfirmationUiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpConfirmationUiPage');
  }

  OTPConfirmation() {
    this.navCtrl.push(CompleteProfilePage);
  }

}
