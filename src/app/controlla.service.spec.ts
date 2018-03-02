import { TestBed, inject } from '@angular/core/testing';

import { ControllaService } from './controlla.service';

describe('ControllaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControllaService]
    });
  });

  it('should be created', inject([ControllaService], (service: ControllaService) => {
    expect(service).toBeTruthy();
  }));
});
