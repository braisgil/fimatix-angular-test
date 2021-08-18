import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  @Input() cityList: Weather[]
  constructor() { }
}
