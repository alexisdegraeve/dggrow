import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PscommonModule } from '../pscommon/pscommon.module';
import { PotatoTableComponent } from './potato-table/potato-table.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    PotatoTableComponent
  ],
  imports: [
    PscommonModule
  ]
})
export class SalesModule { }
