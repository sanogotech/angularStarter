import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commonheader',
  templateUrl: './commonheader.component.html',
  styleUrls: ['./commonheader.component.css']
})
export class CommonheaderComponent implements OnInit {

  nom !:string;
  prenom !:string;
  dateNaissance !:Date;
  age !:Number;
  salaire!:number;
  myphoto!:string;
  users: any[] = [{ 
    "name": "Bob" 
    }, { 
    "name": "Alice" 
    }, { 
    "name": "Tabor" 
    }, { 
    "name": "Mock" 
    }]; 

  constructor() {

   }

  ngOnInit(): void {
    this.nom="SANOGO";
    this.prenom ="Souleymane";
    this.dateNaissance= new Date();
    this.salaire = 200005.6897;
    this.myphoto ="assets/myavatar.jpg"

  }
  
  setValue() {
    this.nom = 'GeeksforGeeks';
  }

  sendFormData(){
    this.nom = "MASSA  SALOMON";
  }

}
