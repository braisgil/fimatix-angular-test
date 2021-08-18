
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, AppState } from '../weather/store/reducers/weather';
import { Search } from './store/actions/weather';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store<AppState>;

  const initalState = {
    weather: {
      cityList: []
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [
        StoreModule.forRoot({ 'weather': reducers }, { initialState: initalState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action to search city data', () => {
    const actionSearch = Search({city: 'test'});
    component._onSearchOutput('test');
    expect(store.dispatch).toHaveBeenCalledWith(actionSearch);
  });
});