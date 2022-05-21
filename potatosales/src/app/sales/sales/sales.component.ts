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
  searchTxt = '';

  constructor(private potatoService: PotatoService) {}

  ngOnInit(): void {
   this.resetData();
  }

  resetData() {
    this.sortedData = [... this.getProduct()];
  }

  getColumnProduct(): Column[] {
    return  this.potatoService.getColumnProduct();
  }

  getProduct(): Product[] {
    return this.potatoService.getColumnData();
  }

  getTotal(item: any) {    
    let totalt = item?.salesQ1 + item?.salesQ2 + item?.salesQ3 + item?.salesQ4;
    return isNaN(+totalt) ? '-' : totalt;
  }

  sort(ind: number, column?: string) {
    this.directData[ind] =  this.directData[ind] ? !this.directData[ind] : true;
    if(column) {
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

  searchSales(){
    if(this.searchTxt !=="") {
       this.sortedData = this.getProduct().filter((item: Product) => item.productName.toLowerCase().includes(this.searchTxt.toLowerCase()));  
    } else {
      this.resetData();
    }
  }

  resetSearch() {
    this.searchTxt ='';
    this.resetData();
  }

}

