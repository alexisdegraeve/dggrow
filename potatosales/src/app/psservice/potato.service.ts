import { Injectable } from '@angular/core';
import Potatos  from '../../assets/json/potatosales.json';
import { Column } from '../pscommon/models/column.model';
import { Product } from '../pscommon/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PotatoService {
  private potatosData: Product[] = [];
  private potatosColumns: Column[] = [];

  constructor() {
    this.potatosColumns = JSON.parse(JSON.stringify(Potatos.column));
    this.potatosData = JSON.parse(JSON.stringify(Potatos.data));
   }

   getColumnProduct():Column[] {
     return this.potatosColumns;
   }

   getColumnData():Product[] {
    return this.potatosData;
  }

   addPotato(nprod:Product) {
     this.potatosData.push(nprod);     
   }
   
}
