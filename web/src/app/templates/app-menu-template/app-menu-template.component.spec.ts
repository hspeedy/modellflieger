import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuTemplateComponent } from './app-menu-template.component';

describe('AppMenuTemplateComponent', () => {
  let component: AppMenuTemplateComponent;
  let fixture: ComponentFixture<AppMenuTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
