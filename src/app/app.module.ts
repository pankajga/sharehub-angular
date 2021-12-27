import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs'
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { StocksComponent } from './stocks/stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { PropertyloaderService } from './config/propertyloader.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Configproperty } from './config/configproperty';
import { NavService } from './service/nav.service';
import {MatDividerModule} from '@angular/material/divider';
import { AboutComponent } from './about/about.component';
import { async } from 'rxjs';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StocksComponent,
    MutualfundsComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [
    {
      provide: Configproperty,
      deps: [HttpClient],
      useExisting: PropertyloaderService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [PropertyloaderService],
      useFactory: propInitlzr
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

export function propInitlzr(loadService: PropertyloaderService){
  return () => {
    return loadService.load();
  };
}
