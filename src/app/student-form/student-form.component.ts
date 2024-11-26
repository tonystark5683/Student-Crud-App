import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentService } from '../services/student.service';
import Student from '../interface/student';
@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})

export class StudentFormComponent {
  formBuild = inject(FormBuilder);

  studentForm :FormGroup = this.formBuild.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [''],
    address: [''],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  studentService = inject(StudentService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  editStudentID!:string;
  ngOnInit(){
    this.editStudentID = this.route.snapshot.params['id']; 
    if(this.editStudentID){
      this.studentService.getStudentById(this.editStudentID).subscribe(result=>{
        this.studentForm.patchValue(result);
        //patchvalue will populate the value in the form
      })
    }
    console.log('id',this.editStudentID);
  }
  addStudent() {
    if (this.studentForm.valid) {
      // Map form values to the Student interface
      const model: Student = {
        name: this.studentForm.value.name as string,
        email: this.studentForm.value.email as string,
        age: this.studentForm.value.age ? Number(this.studentForm.value.age) : undefined,
        address: this.studentForm.value.address as string | undefined,
        password: this.studentForm.value.password as string,
      };
  
      this.studentService.addStudent(model).subscribe({
        next: (result) => {
          console.log('Student added successfully:', result);
          alert('Student added successfully!');
          this.router.navigateByUrl("/");
        },
        error: (err) => {
          console.error('Error adding student:', err);
          alert('Failed to add student. Please try again.');
        },
      });
    } else {
      alert('Invalid Input');
      console.log('Form is invalid');
    }
  }

  updateStudent(){
    if (this.studentForm.valid) {
      // Map form values to the Student interface
      const model: Student = {
        name: this.studentForm.value.name as string,
        email: this.studentForm.value.email as string,
        age: this.studentForm.value.age ? Number(this.studentForm.value.age) : undefined,
        address: this.studentForm.value.address as string | undefined,
        password: this.studentForm.value.password as string,
      };
  
      this.studentService.updateStudent(this.editStudentID,model).subscribe({
        next: (result) => {
          console.log('Student Updated successfully:', result);
          alert('Student Updated successfully!');
          this.router.navigateByUrl("/");
        },
        error: (err) => {
          console.error('Error adding student:', err);
          alert('Failed to add student. Please try again.');
        },
      });
    } else {
      alert('Invalid Input');
      console.log('Form is invalid');
    }
  }
  
}
