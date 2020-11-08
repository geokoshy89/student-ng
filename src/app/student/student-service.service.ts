import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IStudent } from './student.model';
import { IResponse } from './response.model';
import {mockresponse} from './data';
@Injectable({
  providedIn: 'root'
})
export class StudentService{
  deleteStudent(id: any) {
    debugger
    mockresponse.data=mockresponse.data.filter(item=>item.id!=id);
  }

  constructor(private http:HttpClient) { }
  getStudents():Observable<IResponse<IStudent[]>>{
    return this.http.get<IResponse<IStudent[]>>('/api/students')
    .pipe(catchError(this.handleError<IResponse<IStudent[]>>('getstudents',{})));
   }

   getStudentMock(id):Observable<IResponse<IStudent>>{
     console.log(mockresponse);
     debugger
    let students=mockresponse.data.filter(item=>{
      console.log(item.id);
      return item.id==id;});
    let stud={};
    if(students.length>0){
      stud=students[0];
    }
    let mockresponseForStud={
      status:'1',
      data:stud,
      message:"Success"
    };
    return of(mockresponseForStud)
    .pipe(catchError(this.handleError<IResponse<IStudent>>('getstudent',{})));
   }

   getStudentsMock():Observable<IResponse<IStudent[]>>{
     return of(mockresponse)
     .pipe(catchError(this.handleError<IResponse<IStudent[]>>('getstudents',{})));
    }

    saveStudentsMock(student:IStudent){
      mockresponse.data=mockresponse.data.filter(item=>item.id!=student.id);
      mockresponse.data.push(student);
     }
   handleError<T>(operation='operation',result:T){
     return (error:any):Observable<T>=>{
       console.error(error);
       return of(result as T);
     }
   }
}
