import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks/stocks.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        MutualfundsComponent,
        StocksComponent
      ],
    }).compileComponents();
  });

   it('should create the app', () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app).toBeTruthy();
   });

   it(`should have as title 'sharehub'`, () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app.title).toEqual('sharehub');
   });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('sharehub app is running!');
  });*/
//});
