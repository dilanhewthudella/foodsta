import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';

/**
 * Generated class for the EmailLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-log',
  templateUrl: 'email-log.html',
})
export class EmailLogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailLogPage');
  }
  gotoVerfyfogtpwrd(){
   
    this.navCtrl.push(ForgotPasswordPage);
    }  

}
