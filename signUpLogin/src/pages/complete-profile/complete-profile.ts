import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { EmailLoginPage } from '../email-login/email-login';

/**
 * Generated class for the CompleteProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete-profile',
  templateUrl: 'complete-profile.html',
})
export class CompleteProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteProfilePage');
  }

  SaveInformation() {
    this.navCtrl.push(TabsPage);
  }

  Logout() {
    this.navCtrl.push(EmailLoginPage);
  }

}
