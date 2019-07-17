import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentservice: StudentService) { }

  ngOnInit() {
      const studentObservable = this.studentservice.getStudents();
      studentObservable.subscribe((studentsData: Student[]) => {
          this.students = studentsData;
      });
  }

}
