import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISeat } from 'src/app/models/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat!: ISeat;
  @Output() bookSeat = new EventEmitter();

  isBooking: boolean = false;

  constructor() { }

  handleBookSeat(): void {
    this.bookSeat.emit(this.seat);
    this.isBooking = !this.isBooking;
  }

  ngOnInit(): void {
  }

}
