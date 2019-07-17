import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';

import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: '', component: StudentListComponent }
]

@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentListItemComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentModule { }
