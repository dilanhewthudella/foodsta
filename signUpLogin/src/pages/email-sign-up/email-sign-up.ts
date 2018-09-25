import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the EmailSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-sign-up',
  templateUrl: 'email-sign-up.html',
})
export class EmailSignUpPage {
  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailSignUpPage');
  }

  async RegisterWithEmail(user: User) {
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
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

}
