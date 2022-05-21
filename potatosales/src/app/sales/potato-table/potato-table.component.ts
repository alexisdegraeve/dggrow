import { Component, OnInit } from '@angular/core';
import { PotatoService } from 'src/app/psservice/potato.service';

@Component({
  selector: 'ps-potato-table',
  templateUrl: './potato-table.component.html',
  styleUrls: ['./potato-table.component.scss']
})
export class PotatoTableComponent implements OnInit {

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
}
