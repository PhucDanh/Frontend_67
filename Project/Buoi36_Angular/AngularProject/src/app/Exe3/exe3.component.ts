import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe3',
  templateUrl: './exe3.component.html',
  styleUrls: ['./exe3.component.scss']
})
export class Exe3Component implements OnInit {
  productId: string = "";
  productName: string = "";
  productPrice: number = 0;

  productLists: {id: string, name: string, price: number} [] = [];

  constructor() { }

  handleAddProduct(): void {
    this.productLists.push({
      name: this.productName,
      id: this.productId,
      price: +this.productPrice
    });
    console.log(this.productLists);
  }

  ngOnInit(): void {
  }

}
