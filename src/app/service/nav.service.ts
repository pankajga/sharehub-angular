import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configproperty } from '../config/configproperty';
import { Quotes } from '../modal/quote';
import { ShareHub } from '../modal/share-hub';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private config: Configproperty, private http: HttpClient) {
    console.log("in 14: "+this.config.mutualFundsUrl);
  }

  share: ShareHub = {
    mfName: "",
    mfTagLine: "",
    mfReturns: "",
    mfYearPlan: "",
    mfEquity: "",
    mfLogo: ""
  }

  quote: Quotes = {
    quote: "",
    character: "",
    image: "",
    characterDirection: ""
  }

  getMutualFunds(){
    console.log("in 32: "+this.config.mutualFundsUrl);
    this.getQuotes();
    this.http.get<ShareHub>("http://localhost:8080/getMutualFunds")
      .toPromise()
      .then(data => {
        this.share = data!;
        sessionStorage.setItem('mfData',JSON.stringify(this.share));
        //console.log("nav38: "+JSON.parse(sessionStorage.getItem('mfData')!));
        //console.log("MF: "+this.share);
      })
  }


  async getQuotes(){
    await this.http.get<Quotes>("https://thesimpsonsquoteapi.glitch.me/quotes")
      .toPromise()
      .then(data => {
        this.quote = data!;
        sessionStorage.setItem('quotes',JSON.stringify(this.quote));
        //console.log(JSON.parse(sessionStorage.getItem('quotes')!));
        //console.log("MF: "+this.share);
      })
  }
    
  
}
