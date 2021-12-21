import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configproperty } from '../config/configproperty';
import { ShareHub } from '../modal/share-hub';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private config: Configproperty, private http: HttpClient) {}

  share: ShareHub = {
    mfName: "",
    mfTagLine: "",
    mfReturns: "",
    mfYearPlan: "",
    mfEquity: "",
    mfLogo: ""
  }

  /*getFunds(){
    console.log("inside 23");
    this.getMutualFunds().subscribe(data => {
      console.log("in 25");
      this.share = data;
      console.log("this.share: "+this.share);
    })
  }*/

  getMutualFunds(){
    console.log("in 32: "+this.config.mutualFundsUrl);
    this.http.get<ShareHub>("http://localhost:8080/getMutualFunds")
      .toPromise()
      .then(data => {
        this.share = data!;
        sessionStorage.setItem('mfData',JSON.stringify(this.share));
        //console.log("nav38: "+JSON.parse(sessionStorage.getItem('mfData')!));
        //console.log("MF: "+this.share);
      })
   }
    //return this.http.get<ShareHub>(this.config.mutualFundsUrl!);
  
}
