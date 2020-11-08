import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student-service.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute,
     private router: Router) { }
  formValue: any;
  name: string = "";
  address: string = "";
  id:number=0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getStudent(params['id']);
      }
    }
    )
  }
  getStudent(id: any) {
    this.studentService.getStudentMock(id).subscribe(resp => {
      this.name = resp.data.name;
      this.address = resp.data.address;
      this.id=id;
    });
  }
  onSubmit(form) {
    this.formValue = form.value;
    console.log(this.formValue);
    if(!this.id){
      this.id=Math.random();
    }
    this.studentService.saveStudentsMock({
      id: this.id,
      name: this.formValue.name,
      address: this.formValue.address
    });
    this.router.navigate(['/']);
  }
}
