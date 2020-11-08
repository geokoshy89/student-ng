import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from '../student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student:IStudent;
  @Output() deleteEvent:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteStudent(id){
    this.deleteEvent.emit(id);
  }
}
