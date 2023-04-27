import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isActive: boolean = true;

  public changeIsActive():void
  {
  // section ngIf
    // if (this.isActive === true)
    // {
    //   this.isActive = false;
    // }
    // else {
    //   this.isActive = true;
    // }
    // en résumé ça donne:
    this.isActive = !this.isActive;
  }
// section ngFor

  public fruits: string[] = [
  "Pommes",
  "Poires",
  "Bananes",
  "Kiwi",
 ];

//  Type de données

// Chaines
public myFirstStr: string = "This is a string";
public mySecondStr: string = 'This is a string';
public myThirdStr: string|null = null;
public myFourthStr!: string;

// Nombres
public muNum: number = 42;
public myNegativeNum: number = -42;
public myDecimal: number = 5.4;

// Booléen
public myFirstBool: boolean = true;
public mySecondBool: boolean = false;

// Null
public myNull: null = null;

// Tableau
public myArray: [] = [];

// Tableau de chaine
public myStrArray: string[] = ["str1","str2", 'str3',`str4`];
public mySecondStrArray: Array<string> = ["str1","str2", 'str3',`str4`];

// Object
myObject: {} = {};

// Joker
public myJoker: any;

// Tableau Joker
public myJokerArray: any[] = ["str2", 'str3',`str4`, 42, true, [], {}];
public mySecondJokerArray: Array<any> = ["str2", 'str3',`str4`, 42, true, [], {}];

}
