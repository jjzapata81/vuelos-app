import { Component, Input } from '@angular/core';
import { PriceOptions } from '../../interfaces/price-options.interface';

@Component({
  selector: 'price-option',
  templateUrl: './price-option.component.html',
  styleUrl: './price-option.component.css'
})
export class PriceOptionComponent {

  @Input()
  optionDetail: PriceOptions = {
    name:'',
    features:[],
    price: '',
    moreDetails:'', action:''
  }

  selectPrice(option:string):void{
    console.log(option);
  }
}
