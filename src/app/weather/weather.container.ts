import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Weather } from '../model/weather';
import { Search } from './store/actions/weather';
import { getWeather } from './store/selectors/weather';


@Component({
  selector: 'app-weather',
  template: `
    <app-search
      (citySearchOutput)='_onSearchOutput($event)'
    ></app-search>
    <app-results
      [cityList]='cityList$ | async'
    ></app-results>
  `
})
export class WeatherContainer {
  cityList$: Observable<Weather[]>;

  constructor(private store: Store) {
    this.cityList$ = this.store.select<Weather[]>(getWeather);
  }

  _onSearchOutput(city: string) {
    debugger;
    this.store.dispatch(Search({city}));
  }
}
