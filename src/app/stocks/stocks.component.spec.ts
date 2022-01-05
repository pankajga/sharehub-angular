import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavService } from '../service/nav.service';

import { StocksComponent } from './stocks.component';

describe('AppComponent', () => {
  let fixture: StocksComponent;

  beforeEach(() => {
    fixture = new StocksComponent();
  });

  describe('Setup Component', () => {
    it('should be initialised', () => {
      expect(fixture).toBeTruthy();
    })
  })
});
