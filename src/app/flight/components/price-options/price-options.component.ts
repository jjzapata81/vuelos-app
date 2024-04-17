import { Component, Input } from '@angular/core';
import { PriceDetail } from '../../interfaces/price-detail.interfaces';

@Component({
  selector: 'price-options',
  templateUrl: './price-options.component.html',
  styleUrl: './price-options.component.css'
})
export class PriceOptionsComponent {

  @Input()
  options: PriceDetail = {
    plainType: '',
    priceOptions: []
  };

}
