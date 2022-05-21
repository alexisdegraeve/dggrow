import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Column } from 'src/app/pscommon/models/column.model';
import { Product } from 'src/app/pscommon/models/product.model';
import { PotatoService } from 'src/app/psservice/potato.service';

@Component({
  selector: 'ps-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class SalesComponent implements OnInit {

  constructor(private potatoService: PotatoService) {}

  ngOnInit(): void {
  }

  getColumnProduct(): Column[] {
    return  this.potatoService.getColumnProduct();
  }

  getProduct(): Product[] {
    console.log('Columns ',this.potatoService.getColumnData());
    return this.potatoService.getColumnData();
  }

  getTotal(item: any) {    
    let totalt = item?.salesQ1 + item?.salesQ2 + item?.salesQ3 + item?.salesQ4;
    return isNaN(+totalt) ? '-' : totalt;
  }

}
