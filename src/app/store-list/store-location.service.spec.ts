import { TestBed, inject } from '@angular/core/testing';

import { StoreLocationService } from './store-location.service';

describe('StoreLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreLocationService]
    });
  });

  it('should ...', inject([StoreLocationService], (service: StoreLocationService) => {
    expect(service).toBeTruthy();
  }));
});
