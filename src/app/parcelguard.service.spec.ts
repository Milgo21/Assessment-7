import { TestBed } from '@angular/core/testing';

import { ParcelguardService } from './parcelguard.service';

describe('ParcelguardService', () => {
  let service: ParcelguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcelguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
