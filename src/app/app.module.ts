import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentService } from './student/student-service.service';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    NavComponent,
    StudentListComponent,
    StudentDetailsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
