import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHostComponent } from './page-host.component';

describe('PageHostComponent', () => {
  let component: PageHostComponent;
  let fixture: ComponentFixture<PageHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
