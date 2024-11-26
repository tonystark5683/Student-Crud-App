import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Student from '../interface/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = "https://student-crud-app-backend.onrender.com";
  httpClient = inject(HttpClient); // if we are injecting something then we have to add in the provider
  constructor() {}

  getStudents() {
    return this.httpClient.get<Student[]>(this.apiUrl + '/students');
  }

  getStudentById(id:string) {
    return this.httpClient.get<Student>(this.apiUrl + '/students/' + id);
  }

  addStudent(student: Student){
    return this.httpClient.post(this.apiUrl + '/students', student); 
  }
  updateStudent(id:string,student:Student){
    return this.httpClient.put(this.apiUrl + '/students/' + id,student);
  }

  deleteStudent(id:string){
    return this.httpClient.delete(this.apiUrl + '/students/' + id);
  }

}
