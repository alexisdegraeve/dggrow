import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/pscommon/models/product.model';
import { PotatoService } from 'src/app/psservice/potato.service';

@Component({
  selector: 'ps-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = { productID:0, productName:''};
  saveOK = false;
  
  constructor(private potatoService: PotatoService) {}

  ngOnInit(): void {
  }


  resetNewProduct() {
    this.product = {productName: '', productID: 0, productManager: '', startDate:new Date()};
  }

  saveNewProduct() {
    console.log('save');
    console.log(this.product);
    this.potatoService.addPotato(this.product);
    this.saveOK = true;
    this.resetNewProduct();
  }
}
