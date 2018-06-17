import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightControllerListComponent } from './flight-controller-list.component';

describe('FlightControllerListComponent', () => {
  let component: FlightControllerListComponent;
  let fixture: ComponentFixture<FlightControllerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightControllerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightControllerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
