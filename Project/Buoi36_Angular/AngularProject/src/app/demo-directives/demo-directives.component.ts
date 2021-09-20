import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.scss']
})
export class DemoDirectivesComponent implements OnInit {
  isFine: boolean = true;
  month: number = 0;
  isBooking: boolean = true;

  constructor() { }

  handleMakeDecision(value: boolean): void {
    this.isFine = value;
  }

  handleChangeMonth(): void {
    console.log("month", this.month);
  }

  handleSelect(): void {
    this.isBooking = !this.isBooking;
  }

  ngOnInit(): void {
  }

}
