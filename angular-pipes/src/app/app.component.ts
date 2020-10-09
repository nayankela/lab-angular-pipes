import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  public todayDate: Date;
  public amount: number;
  public message: string;

  ngOnInit(): void{

    this.todayDate = new Date();
    this.amount = 100;
    this.message = 'Learning Angular is fun';
  }
}
