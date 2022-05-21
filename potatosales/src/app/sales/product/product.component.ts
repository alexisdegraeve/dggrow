import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/pscommon/models/product.model';
import { PotatoService } from 'src/app/psservice/potato.service';

@Component({
  selector: 'ps-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product= { productID:0, productName:''};
  saveOK = false;
  saveWarning = false;
    
  constructor(private potatoService: PotatoService) {
      }

  ngOnInit(): void {    
  }

  hideSaveOK() {
    this.saveOK = false;
    this.saveWarning = false;
  }

  resetNewProduct(loginForm: NgForm) {
    this.product = {productName: '', productID: 0, productManager: '', startDate:new Date()};
    loginForm.resetForm();        
  }

  saveNewProduct(loginForm: NgForm) {
    if(!loginForm.form.valid) {
      this.saveWarning = true;
    }else {
      this.potatoService.addPotato(this.product);
      loginForm.form.markAsUntouched;
      this.saveOK = true;
      this.resetNewProduct(loginForm);
    
    }
    
  }
}
