import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-databinding',
  templateUrl: './demo-databinding.component.html',
  styleUrls: ['./demo-databinding.component.scss']
})
export class DemoDatabindingComponent implements OnInit {

  fullname: String = "Ngo Phuc Danh";
  age: number = 24;
  imgSrc: String = "https://picsum.photos/200/300";

  description: String = "<h1>Hello!!</h1>";

  handleShowMessage(): void {
    alert("Hello event binding!");
    this.fullname = "npdanh";
  }

  handleChangeName = (event: Event): void => {
    this.fullname = (event.target as HTMLInputElement).value;
  }

  handleChangeAge = (value: String): void => {
    this.age = +value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
