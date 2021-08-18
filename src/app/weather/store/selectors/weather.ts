import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from "../reducers/weather";

export const getWeatherFromAppState = createFeatureSelector<AppState>('weather');

export const getWeather = createSelector(
  getWeatherFromAppState,
  (state: AppState) => state?.cityList
)