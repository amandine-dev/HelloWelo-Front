import { TestBed } from '@angular/core/testing';

import { AddbikerideService } from './addbikeride.service';

describe('AddbikerideService', () => {
  let service: AddbikerideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddbikerideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
