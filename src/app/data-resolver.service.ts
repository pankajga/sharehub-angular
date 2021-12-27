import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NavService } from './service/nav.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor(private nav: NavService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Mutual Funds in resolver...', route);
    return this.nav.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
