import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { EmailLoginPage } from '../email-login/email-login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController, 
  ) {
  }
  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid) {
        this.toast.create({
          message: `Welcome to Foodsta, ${data.email}`,
          duration: 3000
        }).present();
      }  
    });
  }

  Logout() {
    let result = this.afAuth.auth.signOut();
    if (result) {
      this.navCtrl.setRoot(EmailLoginPage);
    }
  }

}
