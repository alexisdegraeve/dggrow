import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pscommon/login/login.component';
import { PagenotfoundComponent } from './pscommon/pagenotfound/pagenotfound.component';
import { UserGuard } from './psguard/user.guard';
import { ProductComponent } from './sales/product/product.component';
import { SalesComponent } from './sales/sales/sales.component';
import { WelcomeComponent } from './sales/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate:[UserGuard]},
  { path: 'welcome', component: WelcomeComponent, canActivate:[UserGuard]},
  { path: 'product', component: ProductComponent, canActivate:[UserGuard]},
  { path: 'sales', component: SalesComponent, canActivate:[UserGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
