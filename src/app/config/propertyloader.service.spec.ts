import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { PropertyloaderService } from './propertyloader.service';
import { HttpClientModule } from '@angular/common/http';

describe('PropertyloaderService', () => {
  let service: PropertyloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PropertyloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
