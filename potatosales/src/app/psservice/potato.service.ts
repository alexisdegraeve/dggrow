import { Injectable } from '@angular/core';
import Potatos  from '../../assets/json/potatosales.json';

@Injectable({
  providedIn: 'root'
})
export class PotatoService {

  constructor() {
    console.log(Potatos);
   }

   getPotatoes() {
     return Potatos;
   }
}
