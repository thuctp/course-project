import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';

import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent {
  listCourse: any[] = [];

  // form!: FormGroup;
  form = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    duration: new FormControl(),
    type: new FormControl(''),
    price: new FormControl(),
    description: new FormControl(''),
  });

  constructor(
    private coursersService: CoursesService,
    private fb: FormBuilder
  ){}

  get isTypeDisabled(){
    return this.form.get('type')?.value ==="Free";
  }

  ngOnInit(){

    this.listCourse = this.coursersService.getNormalCourses();

    this.form = this.fb.group({
      name: ['Title', Validators.required],
      author: ['Author', Validators.required],
      duration: [0, [Validators.required, Validators.min(1)]],
      type: ['Free', Validators.required],
      price: [{value: 0, disabled: this.form.get('type')}, Validators.required],
      description: [""],
    })

    this.form.get('type')?.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((val) => {
        if(val === "Free"){
          this.form.get("price")?.disable();
          this.form.get("price")?.setValue(0);
        }
        else {
          this.form.get("price")?.enable();
        }
      });
  }

  addCourse(){
    if (this.form.invalid){
      return;
    }

    let addItemCourse = {
      id: uuidv1(),
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
