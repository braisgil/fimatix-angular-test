import { Weather } from "src/app/model/weather";
import { Search, Add, Error } from "../actions/weather";

export interface AppState {
  cityList: Weather[],
}

export const initialState: AppState = {
  cityList: []
}

export const reducers = (state: AppState = initialState, action) => {
  switch(action.type) {
    case '[Weather] Search Success': {

      return { cityList: [...state.cityList, action.payload]}
    }
    default: {
      return state
    }
  }
}