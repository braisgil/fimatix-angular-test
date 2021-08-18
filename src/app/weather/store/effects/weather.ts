import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActionType, Search, Add, Error } from '../actions/weather';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../../model/weather';

@Injectable()
export class WeatherEffects {

constructor(private actions$: Actions, private weatherService: WeatherService) {}
  search$: Observable<Action> = createEffect(() => 
    this.actions$.pipe(
      ofType(ActionType.SEARCH),
      switchMap((action: any) => {
        return this.weatherService.searchCityWeatherData(action.city)
          .pipe(
            map((payload: Weather) => this.weatherService.filterData(payload)),
            map((payload: Weather) => Add({ payload })),
            catchError((error: string) => of(Error({ error })))
          );
      }
    )
  ))
}