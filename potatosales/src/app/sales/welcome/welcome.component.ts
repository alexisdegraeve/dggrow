import { Component, OnInit } from '@angular/core';
import { PotatoService } from 'src/app/psservice/potato.service';

@Component({
  selector: 'ps-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(potatService: PotatoService) { }

  ngOnInit(): void {
  }

}
