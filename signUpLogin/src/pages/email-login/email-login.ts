import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { EmailSignUpPage } from '../email-sign-up/email-sign-up';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

/**
 * Generated class for the EmailLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-login',
  templateUrl: 'email-login.html',
})
export class EmailLoginPage {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailLoginPage');
  }

  async LoginWithEmail(user: User) {
    try {
     const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
     console.log(result);
     if(result) {
       this.navCtrl.setRoot(TabsPage);
     } else {
       console.log("ERROR!");
     }
    } catch(e) {
      console.error(e);
    }
  }

  RegisterWithEmail() {
    this.navCtrl.push(EmailSignUpPage);
  }

  ForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
