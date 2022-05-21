import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PscommonModule } from '../pscommon/pscommon.module';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    PscommonModule
  ]
})
export class SalesModule { }
