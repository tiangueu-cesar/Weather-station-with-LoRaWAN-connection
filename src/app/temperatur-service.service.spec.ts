import { TestBed } from '@angular/core/testing';

import { TemperaturServiceService } from './temperatur-service.service';

describe('TemperaturServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperaturServiceService = TestBed.get(TemperaturServiceService);
    expect(service).toBeTruthy();
  });
});
