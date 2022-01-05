import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavService } from '../service/nav.service';

import { MutualfundsComponent } from './mutualfunds.component';

describe('MutualFundComponent', () => {
  let fixture: MutualfundsComponent;

  beforeEach(() => {
    fixture = new MutualfundsComponent();
    sessionStorage.clear();
  });

  describe('Setup Component', () => {
    it('should be initialised', () => {
      expect(fixture).toBeTruthy();
    });
    it('should get user info from session storage', () => {
      const sessionData = JSON.parse(sessionStorage.getItem('mfData')!);
      expect(sessionData).toBeDefined;
    });
  
    it('should get empty object if no user info in session storage', () => {
      const sessionData = JSON.parse(sessionStorage.getItem('mfData')!);
      expect(sessionData).toBeNull;
    });
  })
});
