import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareHub } from '../modal/share-hub';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  share: ShareHub[] = [{
    mfName: "",
    mfTagLine: "",
    mfReturns: "",
    mfYearPlan: "",
    mfEquity: "",
    mfLogo: ""
  }]


  constructor(private nav: NavService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(
      //'Activated route data in Component:::',
      //this.activatedRoute.data
    //);
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      this.share = response.data;
      if (typeof this.share !== 'undefined') {
        sessionStorage.setItem('mfData',JSON.stringify(this.share));
      }
      //sessionStorage.setItem('mfData',JSON.stringify(this.share));
      console.log(this.share);
      //console.log(JSON.parse(sessionStorage.getItem('mfData')!));
    });
  }

}
