import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {VerfyPage} from '../pages/verfy/verfy';
import {FbregPage} from '../pages/fbreg/fbreg';
import {EmailLogPage} from '../pages/email-log/email-log';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    VerfyPage,
    FbregPage,
    EmailLogPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    VerfyPage,
    FbregPage,
    EmailLogPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
