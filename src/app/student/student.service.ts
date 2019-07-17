import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    enrollno: '110470116021',
    college: 'VVP Engineering College',
    university: 'GTU'
  },
  {
      id: 2,
      name: 'Rushabh',
      enrollno: '110470116023',
      college: 'VVP Engineering College',
      university: 'GTU'
  }]

  constructor() { }

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
        setTimeout(() => {
            observer.next(this.students);
        }, 1000);
    });

    return studentsObservable;
}

}