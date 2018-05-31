import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarTemplateComponent } from './app-bar-template.component';

describe('AppBarTemplateComponent', () => {
  let component: AppBarTemplateComponent;
  let fixture: ComponentFixture<AppBarTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
