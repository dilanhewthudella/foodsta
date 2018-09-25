import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CompleteProfilePage } from '../pages/complete-profile/complete-profile';
import { EmailLoginPage } from '../pages/email-login/email-login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { OtpConfirmationUiPage } from '../pages/otp-confirmation-ui/otp-confirmation-ui';
import { OtpSignupPage } from '../pages/otp-signup/otp-signup';
import { EmailSignUpPage } from '../pages/email-sign-up/email-sign-up';
import { SliderPage } from '../pages/slider/slider';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CompleteProfilePage,
    EmailLoginPage,
    ForgotPasswordPage,
    OtpConfirmationUiPage,
    OtpSignupPage,
    EmailSignUpPage,
    SliderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CompleteProfilePage,
    EmailLoginPage,
    ForgotPasswordPage,
    OtpConfirmationUiPage,
    OtpSignupPage,
    EmailSignUpPage,
    SliderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
