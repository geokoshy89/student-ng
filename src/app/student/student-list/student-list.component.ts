import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-service.service';
import { IStudent } from '../student.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students:IStudent[]; 
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsMock().subscribe(response=>{
      this.students=response.data;
     }  
    );
  }

  deleteStudent(id){
    this.studentService.deleteStudent(id);
    this.studentService.getStudentsMock().subscribe(response=>{
      this.students=response.data;
     }  
    );
  }

}
