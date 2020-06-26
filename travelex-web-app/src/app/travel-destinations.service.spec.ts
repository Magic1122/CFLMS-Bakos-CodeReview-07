import { TestBed } from '@angular/core/testing';

import { TravelDestinationsService } from './travel-destinations.service';

describe('TravelDestinationsService', () => {
  let service: TravelDestinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelDestinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
