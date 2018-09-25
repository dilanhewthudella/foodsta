import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VerfyPage} from '../verfy/verfy';
import {FbregPage} from '../fbreg/fbreg';
import {EmailLogPage}from '../email-log/email-log';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  gotoVerfyphn(){
   
    this.navCtrl.push(VerfyPage);
    }
  gotoVerfyFb(){
   
      this.navCtrl.push(FbregPage);
      }  
  gotoVerfyEmail(){
   
        this.navCtrl.push(EmailLogPage);
        }     
}