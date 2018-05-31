import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFrameTemplateComponent } from './app-frame-template.component';

describe('AppFrameTemplateComponent', () => {
  let component: AppFrameTemplateComponent;
  let fixture: ComponentFixture<AppFrameTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFrameTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFrameTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
