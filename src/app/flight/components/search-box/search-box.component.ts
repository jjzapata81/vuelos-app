import { Component, EventEmitter, Output } from '@angular/core';
import { SearchCriteria } from '../../interfaces/search-criteria.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output()
  searchEmmiter = new EventEmitter<SearchCriteria>();

  ROUND_TRIP = 'Ida y vuelta';
  TRIP_TYPE = 'Económica';

  isRoundTrip = true;

  searchCriteria:SearchCriteria = {
    roundType: this.ROUND_TRIP,
    type: this.TRIP_TYPE,
    passengersNumber: 0,
    from: '',
    to: ''
  }

  /*searchForm = new FormGroup({
    roundType : new FormControl('', [], []),
    type : new FormControl('', [], []),
    passengersNumber : new FormControl(0, [], []),
    from : new FormControl('', [], []),
    to : new FormControl('', [], []),
  })*/


  searchForm = this.fb.group({
    roundType : [this.ROUND_TRIP, [], []],
    type : [this.TRIP_TYPE, [], []],
    passengersNumber : [0, [Validators.required, Validators.min(1)], []],
    from : ['', [Validators.required], []],
    to : ['', [Validators.required], []],
    travelDate:[new Date()],
    returnDate: [new Date()]
  })

  constructor(private fb:FormBuilder){
    this.onRoundType();
  }

  onSearch(){
    console.log('Busqueda:',this.searchCriteria);
    this.searchEmmiter.emit(this.searchCriteria);
  }

  onRoundType(){
    //this.isRoundTrip = this.ROUND_TRIP === this.searchCriteria.roundType;
    this.isRoundTrip = this.ROUND_TRIP === this.searchForm.controls.roundType.value;
  }


  onSubmit(){
    if(this.searchForm.invalid){
      this.searchForm.markAllAsTouched();
      return;
    }
    console.log(this.searchForm.value);
    //this.searchEmmiter.emit(this.searchForm.value);


    let valor:SearchCriteria = JSON.parse(JSON.stringify(this.searchForm.value));
    console.log('lo que se envia ',valor);
    this.searchEmmiter.emit(valor);
    this.searchForm.reset({roundType:this.ROUND_TRIP, type:this.TRIP_TYPE});
  }

}
