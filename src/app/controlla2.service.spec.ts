import { TestBed, inject } from '@angular/core/testing';

import { Controlla2Service } from './controlla2.service';

describe('Controlla2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Controlla2Service]
    });
  });

  it('should be created', inject([Controlla2Service], (service: Controlla2Service) => {
    expect(service).toBeTruthy();
  }));
});
