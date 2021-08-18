import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() citySearchOutput?: EventEmitter<string> = new EventEmitter();
  city: string = ''

  constructor() {

  }

  onFormSubmit() {
    this.city && this.citySearchOutput.emit(this.city)
  }
}
