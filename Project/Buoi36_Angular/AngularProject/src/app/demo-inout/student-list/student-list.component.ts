import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: { name: string; age: number }[] = [
    { name: 'Trung Hiếu', age: 18 },
    { name: 'Tấn Trường', age: 19 },
    { name: 'Hoàng Dũng', age: 18 },
    { name: 'Đức Phúc', age: 19 },
  ];

  highQualityStudents: { name: string; age: number }[] = [];

  className: string = 'VLH1';

  selectedMonitor: string | undefined;
  selectedViceMonitor: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setMonitor(value: string) {
    this.selectedMonitor = value;
  }
  setViceMonitor(value: string): void {
    this.selectedViceMonitor = value;
  }

  setQualityStudent(value: {name: string, age: number}): void {
    this.highQualityStudents.push(value);
  }
}
