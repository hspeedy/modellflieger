import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingsButtonComponent } from './app-settings-button.component';

describe('AppSettingsButtonComponent', () => {
  let component: AppSettingsButtonComponent;
  let fixture: ComponentFixture<AppSettingsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSettingsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSettingsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
