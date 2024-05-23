import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriceOptions } from '../../interfaces/price-options.interface';

@Component({
  selector: 'price-option',
  templateUrl: './price-option.component.html',
  styleUrl: './price-option.component.css'
})
export class PriceOptionComponent {

  @Output()
  actionEmmiter = new EventEmitter<string>();


  @Input()
  optionDetail: PriceOptions = {
    flightid:0,
    name:'',
    features:[],
    price: 0,
    moreDetails:'', action:'', rate:0
  }

  selectPrice(option:number):void{
    this.actionEmmiter.emit(option+'');
  }
}
