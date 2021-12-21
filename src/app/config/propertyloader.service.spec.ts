import { TestBed } from '@angular/core/testing';

import { PropertyloaderService } from './propertyloader.service';

describe('PropertyloaderService', () => {
  let service: PropertyloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
