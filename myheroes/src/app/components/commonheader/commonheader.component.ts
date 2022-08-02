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
  salaire!:number;

  constructor() {

   }

  ngOnInit(): void {
    this.nom="SANOGO";
    this.prenom ="Souleymane";
    this.dateNaissance= new Date();
    this.salaire = 200005.6897;

  }
  
  setValue() {
    this.nom = 'GeeksforGeeks';
  }

  sendFormData(){
    this.nom = "MASSA  SALOMON";
  }

}
