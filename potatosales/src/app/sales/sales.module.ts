import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PscommonModule } from '../pscommon/pscommon.module';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    ProductComponent,
    SalesComponent
  ],
  imports: [
    PscommonModule
  ]
})
export class SalesModule { }
