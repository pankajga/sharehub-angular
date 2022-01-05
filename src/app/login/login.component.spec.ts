import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavService } from '../service/nav.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let fixture: LoginComponent;
  let service: NavService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [NavService]
    });
    service = TestBed.inject(NavService);
    fixture = new LoginComponent(service);
  });

  describe('Setup Component', () => {
    it('should be initialised', () => {
      expect(fixture).toBeTruthy();
    })
  })
});
