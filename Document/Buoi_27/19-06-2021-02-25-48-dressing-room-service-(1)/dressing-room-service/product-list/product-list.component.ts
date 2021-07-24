import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}

  //lifecycle chạy khi mà input đầu vào thay đổi
  ngOnChanges() {
  }

  
}
