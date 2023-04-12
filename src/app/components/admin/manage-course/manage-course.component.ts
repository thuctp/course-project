import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent {
  listCourse: any[] = [];

  form!: FormGroup;

  constructor(
    private coursersService: CoursesService,
    private fb: FormBuilder
  ){}


  ngOnInit(){

    this.listCourse = this.coursersService.getNormalCourses();

    this.form = this.fb.group({
      name: ['Title', Validators.required],
      author: ['Author', Validators.required],
      duration: [0, [Validators.required, Validators.min(1)]],
      type: ['Free', Validators.required],
      price: [0, Validators.required],
      description: [""],
    })
  }

  addCourse(){
    if (this.form.invalid){
      return;
    }

    let addItemCourse = {
      id: this.listCourse[this.listCourse.length-1].id+1,
      name: this.form.get('name')?.value,
      author: this.form.get('author')?.value,
      duration: this.form.get('duration')?.value,
      type: this.form.get('type')?.value,
      price: this.form.get('price')?.value,
      description: this.form.get('description')?.value,
    }
    this.coursersService.pushToProduct(addItemCourse);

  }
}
