
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { WeatherEffects } from './weather';
import { WeatherService } from '../../weather.service';
import { Weather } from 'src/app/model/weather';
import { Search, Add } from '../actions/weather';
import { of } from 'rxjs'

describe('WeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: WeatherEffects;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WeatherEffects,
        WeatherService,
        provideMockActions(() => actions$),
      ]
    });
    effects = TestBed.get(WeatherEffects);
    weatherService = TestBed.get(WeatherService);
  });
  
  it('should return a success search if response is successful', () => {
    const responseMock: Weather = {
      city: { 
        id: 1,
        name: 'London'
      },
      list: [
        {
          dt:1628791200,
          main: {
            temp:21.21,
            temp_min:21.21,
            temp_max:21.44,
            pressure:1019,
            sea_level:1019,
            grnd_level:1014,
            humidity:70,
            temp_kf:-0.23
          },
          weather:[
            {
              id:803,
              main:"Clouds",
              description:"broken clouds",
              icon:"04d"
            }
          ],
          clouds:{
            all:79
          },
          wind:{
            speed:4.23,
            deg:228,
          },
          sys:{
            pod:"d"
          },
          dt_txt:"2021-08-12 18:00:00"
        },
      ]
    }

    spyOn(weatherService, 'searchCityWeatherData').and.returnValue(of(responseMock));

    const action = Search({city: 'London'});
    const completion = Add({payload: responseMock as Weather});
    actions$ = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });
    expect(effects.search$).toBeObservable(expected);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

});