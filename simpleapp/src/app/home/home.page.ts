import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
    myVariable: string = "The force is with me!";
    updateMyValue(){
      this.myVariable = "Now the force is even stronger"
    }
    myVariable2: string = "Bye";
    updateMyValue2(){
      this.myVariable2 = "Hello From ionic Mobile Development"
    }
}
