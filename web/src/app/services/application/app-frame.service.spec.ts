import { TestBed, inject } from '@angular/core/testing';

import { AppFrameService } from './app-frame.service';

describe('AppFrameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppFrameService]
    });
  });

  it('should be created', inject([AppFrameService], (service: AppFrameService) => {
    expect(service).toBeTruthy();
  }));
});
