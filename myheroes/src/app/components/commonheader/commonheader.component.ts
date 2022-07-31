import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commonheader',
  templateUrl: './commonheader.component.html',
  styleUrls: ['./commonheader.component.css']
})
export class CommonheaderComponent implements OnInit {

  nom !:String;
  prenom !:String;
  dateNaissance !:Date;
  age !:Number;

  constructor() {

   }

  ngOnInit(): void {
    this.nom="SANOGO";
    this.prenom ="Souleymane";
    this.dateNaissance= new Date();

  }

}
