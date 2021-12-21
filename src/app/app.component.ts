import { Component } from '@angular/core';
import { Configproperty } from './config/configproperty';
import { ShareHub } from './modal/share-hub';
import { NavService } from './service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharehub';
  constructor(private config: Configproperty){
    console.log("in app: "+config.mutualFundsUrl);
  }
}
