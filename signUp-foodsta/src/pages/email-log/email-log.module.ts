import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailLogPage } from './email-log';

@NgModule({
  declarations: [
    EmailLogPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailLogPage),
  ],
})
export class EmailLogPageModule {}
