import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather, WeatherList } from '../model/weather';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) { }

  searchCityWeatherData(city: string): Observable<Weather> {
    const cityParam = {q: city}
    return this.http.get<Weather>(this.url, {params: {...this.params, ...cityParam}});
  }

  filterData(data: Weather) {
    return {
      city: data.city,
      list: this.getFilteredList(data.list)
    } as Weather
  }
  
  getFilteredList(dataList: WeatherList[]) {
    const validHours: Array<number> = [0, 6, 12, 18];
    const filteredList = dataList.filter((listEntry: WeatherList) => {
      const predictionTime = new Date(listEntry.dt * 1000).getHours() - 1;
      return validHours.includes(predictionTime)
    })
    return filteredList;
  }
}
