import {Routes} from '@angular/router'
import { StudentAddComponent } from './student/student-add/student-add.component'
import { StudentListComponent } from './student/student-list/student-list.component';

export const appRoutes:Routes=[
    {path:'students/add',component:StudentAddComponent},
    {path:'students/add/:id',component:StudentAddComponent},
    {path:'',component:StudentListComponent}
];