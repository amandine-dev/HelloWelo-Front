import { TestBed } from '@angular/core/testing';

import { SearchBikerideService } from './search-bikeride.service';

describe('SearchBikerideService', () => {
  let service: SearchBikerideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBikerideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
