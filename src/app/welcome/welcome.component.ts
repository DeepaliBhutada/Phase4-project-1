import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  //@ViewChild('name') nameKey!: ElementRef;
  name1:string = "";

  startQuiz(){
    //localStorage.setItem("name", this.nameKey.nativeElement.value)
    localStorage.setItem("name", this.name1)
  }
}
