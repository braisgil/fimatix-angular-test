import { Action } from "@ngrx/store";
import { Weather } from "src/app/model/weather";
import { createAction, props } from "@ngrx/store";

export const ActionType = {
  SEARCH: '[Weather] Search',
  SEARCH_SUCCESS: '[Weather] Search Success',
  SEARCH_ERROR: '[Weather] Search Error'
}

export const Search = createAction(
  ActionType.SEARCH,
  props<{ city: string }>()
)

export const Add = createAction(
  ActionType.SEARCH_SUCCESS,
  props<{ payload : Weather }>()
);

export const Error = createAction(
  ActionType.SEARCH_ERROR,
  props<{ error: any }>()
);
