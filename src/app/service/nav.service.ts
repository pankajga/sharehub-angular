import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Configproperty } from '../config/configproperty';
import { PropertyloaderService } from '../config/propertyloader.service';
import { Quotes } from '../modal/quote';
import { ShareHub } from '../modal/share-hub';

import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private config: Configproperty, private http: HttpClient, private urlLoad: PropertyloaderService) {
    console.log("in 14: "+this.config.mutualFundsUrl);
  }

  public clientId = 'spa-sharehub';
  public redirectUri = 'http://localhost:4200/';

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

  // async getMutualFunds(){
  //   console.log("in 32mf: "+this.urlLoad.mfUrl);
  //   this.getQuotes();
  //   await this.http.get<ShareHub>("http://localhost:9090/share/getMutualFunds")
  //     .toPromise()
  //     .then(data => {
  //       this.share = data!;
  //       sessionStorage.setItem('mfData',JSON.stringify(this.share));
  //       //console.log("nav38: "+JSON.parse(sessionStorage.getItem('mfData')!));
  //       //console.log("MF: "+this.share);
  //     })
  // }

  
  retrieveToken(code: string){
    let params = new URLSearchParams();   
    params.append('grant_type','authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', 'newClientSecret');
    params.append('redirect_uri', this.redirectUri);
    params.append('code',code);

    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
    console.log("in70 retrieve token");
     this.http.post('http://localhost:8080/auth/realms/sharehub/protocol/openid-connect/token', params.toString(), { headers: headers })
    .subscribe(
      data => this.saveToken(data),
      err => alert('Invalid Credentials')
    ); 
  }

  saveToken(token:any){
    console.log("in save token: "+token);
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    Cookie.set("id_token", token.id_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:4200/home';
  }


  // async getMutualFunds(){
  //   var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
  //   await this.http.get<ShareHub>("http://localhost:9090/share/getMutualFunds", { headers: headers })
  //     .toPromise()
  //     .then(data => {
  //       this.share = data!;
  //       sessionStorage.setItem('mfData',JSON.stringify(this.share));
  //       //console.log("nav38: "+JSON.parse(sessionStorage.getItem('mfData')!));
  //       //console.log("MF: "+this.share);
  //     })
  // }

  getProducts(): Observable<ShareHub[]> {
    var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
    return this.http.get<ShareHub[]>("http://localhost:9090/share/getMutualFunds", { headers: headers });
  }


  checkCredentials(){
    return Cookie.check('access_token');
  } 

  logout() {
    let token = Cookie.get('id_token');
    Cookie.delete('access_token');
    Cookie.delete('id_token');
    let logoutURL = "http://localhost:8080/auth/realms/sharehub/protocol/openid-connect/logout?id_token_hint="
      + token
      + "&post_logout_redirect_uri=" + this.redirectUri;

    window.location.href = logoutURL;
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
