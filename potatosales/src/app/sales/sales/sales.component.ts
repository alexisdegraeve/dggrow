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

  sortedData : Product[] = [];
  directData: Boolean[] = [];

  constructor(private potatoService: PotatoService) {}

  ngOnInit(): void {
    this.sortedData = this.getProduct();
  }

  getColumnProduct(): Column[] {
    return  this.potatoService.getColumnProduct();
  }

  getProduct(): Product[] {
    //console.log('Columns ',this.potatoService.getColumnData());
    return this.potatoService.getColumnData();
  }

  getTotal(item: any) {    
    let totalt = item?.salesQ1 + item?.salesQ2 + item?.salesQ3 + item?.salesQ4;
    return isNaN(+totalt) ? '-' : totalt;
  }

  sort(ind: number, column?: string) {
    this.directData[ind] =  this.directData[ind] ? !this.directData[ind] : true;
    console.log(this.directData[ind]);
    console.log(this.directData);
    if(column) {
      console.log(column);
      this.sortedData = [...this.sortByColumn(this.sortedData, column, this.directData[ind] ? 'asc': 'desc')];
    }
  }

  sortByColumn(list: any[] | undefined, column:string, direction = 'desc'): any[] {
    let sortedArray = (list || []).sort((a,b)=>{
      if(a[column] > b[column]){
        return (direction === 'desc') ? 1 : -1;
      }
      if(a[column] < b[column]){
        return (direction === 'desc') ? -1 : 1;
      }
      return 0;
    })
  return sortedArray;
}

}
