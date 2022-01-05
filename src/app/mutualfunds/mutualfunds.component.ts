import { Component, OnInit } from '@angular/core';
import { ShareHub } from '../modal/share-hub';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-mutualfunds',
  templateUrl: './mutualfunds.component.html',
  styleUrls: ['./mutualfunds.component.css']
})
export class MutualfundsComponent implements OnInit {

  constructor() {
    //console.log(JSON.parse(sessionStorage.getItem('mfData')!));
    //showData: Boolean;
  }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('mfData')!));
  }

  userData: { id: number, name: string }[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];

  data: ShareHub[] = JSON.parse(sessionStorage.getItem('mfData')!);

}
