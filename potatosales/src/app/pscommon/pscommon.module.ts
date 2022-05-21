import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PotatoService } from '../psservice/potato.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [
    PotatoService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule
  ]
})
export class PscommonModule { }
