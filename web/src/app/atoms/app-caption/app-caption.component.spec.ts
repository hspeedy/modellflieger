import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCaptionComponent } from './app-caption.component';

describe('AppCaptionComponent', () => {
  let component: AppCaptionComponent;
  let fixture: ComponentFixture<AppCaptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCaptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
