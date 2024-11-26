import { Component, inject } from '@angular/core';
import Student from '../interface/student';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,MatButtonModule,RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students: Student[] = [];
  studentService = inject(StudentService);
  ngOnInit() { //ngOnIt
    this.studentService.getStudents().subscribe({
      next: (result) => {
          this.students = result;
          console.log(this.students);
      },
      error: (err) => {
          console.error('Error fetching students:', err);
      },
  });
  
  }
  delete(id:string){
    const ok = confirm("Really You want To delete?");
    if(ok){
      this.studentService.deleteStudent(id).subscribe((result)=>{
        alert("Student deleted Succesfully");
        this.students=this.students.filter(ele=>ele._id!=id);
      })
    }
  }
}
