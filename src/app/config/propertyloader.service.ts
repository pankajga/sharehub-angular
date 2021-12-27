import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configproperty } from './configproperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyloaderService extends Configproperty {

  constructor(private http: HttpClient) {
    super();
   }

  private _config: Object;
  mfUrl?: string;

   async load() {
    await this.http.get<Configproperty>('app.config.json')
      .toPromise()
      .then(data => {
        this.mutualFundsUrl = data?.mutualFundsUrl;
        this.mfUrl = data?.mutualFundsUrl;
        console.log("MF: "+this.mutualFundsUrl);
      })
      .catch(() =>{
        console.error("Could not load configuration");
      });
   }
}
