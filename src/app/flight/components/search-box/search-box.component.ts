import { Component } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  search(value:string){
    console.log(value);
    value='';
  }

}
