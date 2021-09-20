import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailIndexComponent } from './detail-index/detail-index.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DetailIndexComponent, 
    HttpClientModule
  ],
  imports: [
    CommonModule
  ]
})
export class DetailModule { }
