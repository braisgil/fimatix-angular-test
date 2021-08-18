import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the city value', () => {
    component.city = 'London'
    spyOn(component.citySearchOutput, 'emit');
    component.onFormSubmit()
    expect(component.citySearchOutput.emit).toHaveBeenCalledWith('London');
  });

  it('should not emit if citie value is empty', () => {
    component.city = ''
    spyOn(component.citySearchOutput, 'emit');
    component.onFormSubmit()
    expect(component.citySearchOutput.emit).not.toHaveBeenCalled();
  }); 
  
});