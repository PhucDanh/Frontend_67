import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  // Tạo biến hứng dữ liệu từ cha
  @Input() student!: { name: string; age: number };
  @Input() className: string | undefined;
  @Output() selectMonitor = new EventEmitter();
  @Output() selectViceMonitor = new EventEmitter();
  @Output() selectQualityStudent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectMonitor(): void {
    this.selectMonitor.emit(this.student.name);
  }

  handleSelectViceMonitor(): void {
    this.selectViceMonitor.emit(this.student.name);
  }

  handleSelectQualityStudent(): void {
    this.selectQualityStudent.emit(this.student);
  }
}
