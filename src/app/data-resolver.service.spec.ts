import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataResolverService } from './data-resolver.service';
import { NavService } from './service/nav.service';

describe('DataResolverService', () => {
  let service: DataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [NavService]
    });
    service = TestBed.inject(DataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
