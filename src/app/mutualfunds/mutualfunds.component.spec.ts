import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavService } from '../service/nav.service';

import { MutualfundsComponent } from './mutualfunds.component';

describe('MutualfundsComponent', () => {
  let component: MutualfundsComponent;
  let fixture: ComponentFixture<MutualfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MutualfundsComponent ],
      providers: [NavService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
