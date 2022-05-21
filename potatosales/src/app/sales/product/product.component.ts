import { Component, OnInit } from '@angular/core';
import { PotatoService } from 'src/app/psservice/potato.service';

@Component({
  selector: 'ps-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product = {productName: '', productID: 0, productManager: '', startDate: ''};
  
  constructor(private potatoService: PotatoService) {}

  ngOnInit(): void {
  }

  getPotatoesColumn() {
    return this.potatoService.getPotatoes().column;
  }

  getPotatoesData() {
    return this.potatoService.getPotatoes().data;
  }

  getTotal(item: any) {
    return item?.salesQ1 + item?.salesQ2 + item?.salesQ3 + item?.salesQ4;
  }

  resetNewProduct() {
    this.product = {productName: '', productID: 0, productManager: '', startDate:''};
  }

  saveNewProduct() {
    console.log('save');
    console.log(this.product);
  }
}
