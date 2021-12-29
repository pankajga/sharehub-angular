import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../modal/quote';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { 
    //console.log("abbbb: "+JSON.parse(sessionStorage.getItem('quotes')!));
  }

  ngOnInit(): void {
  } 

  quote: Quotes[] = JSON.parse(sessionStorage.getItem('quotes')!);

}
