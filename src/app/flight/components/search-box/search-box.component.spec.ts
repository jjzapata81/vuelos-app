import { FormBuilder } from "@angular/forms";
import { SearchBoxComponent } from "./search-box.component";

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;

  beforeEach(() => {
    component = new SearchBoxComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an roundType', () => {
    expect(component.searchForm.contains('roundType')).toBeTruthy();
  });

  it('should have an roundType with default value', () => {

    const roundType = component.searchForm.get('roundType');

    expect(roundType!.value).toBe('Ida y vuelta');
  });

  it('should have an required from field', () => {

    const from = component.searchForm.get('from');

    expect(from!.valid).toBe(false);
  });

  xit('Cannot submit with invalid form', () => {

    //const from = component.searchForm.get('from');

    component.onSubmit()
    expect(component.searchEmmiter).toHaveBeenCalled();
  });



});
