import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTileTemplateComponent } from './content-tile-template.component';

describe('ContentTileTemplateComponent', () => {
  let component: ContentTileTemplateComponent;
  let fixture: ComponentFixture<ContentTileTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTileTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTileTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
