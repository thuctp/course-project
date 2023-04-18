import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { distinctUntilChanged } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';

import { HomeAdminComponent } from '../home-admin/home-admin.component';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent{
  listCourse: any[] = [];

  // myForm!: FormGroup;
  myForm = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    duration: new FormControl(),
    type: new FormControl(''),
    price: new FormControl(),
    description: new FormControl(''),
  });

  @Input()
  itemCourse: any;

  constructor(
    private coursersService: CoursesService,
    private homeAdmin: HomeAdminComponent,
    private fb: FormBuilder
  ){}

  // get isTypeDisabled(){
  //   return this.myForm.get('type')?.value ==="Free";
  // }

  ngOnInit(){

    this.listCourse = this.coursersService.getNormalCourses();

    this.myForm = this.fb.group({
      name: [this.itemCourse.name, Validators.required],
      author: [this.itemCourse.author, Validators.required],
      duration: [this.itemCourse.duration, [Validators.required, Validators.min(1)]],
      type: [this.itemCourse.type, Validators.required],
      price: [{value: this.itemCourse.price, disabled: this.itemCourse.type==="Free"}, Validators.required],
      description: [this.itemCourse.description],
    })

    this.myForm.get('type')?.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((val) => {
        if(val === "Free"){
          this.myForm.get("price")?.disable();
          this.myForm.get("price")?.setValue(0);
        }
        else {
          this.myForm.get("price")?.enable();
        }
      });

  }


  updateCourse(){
    if (this.myForm.invalid){
      return;
    }

    let addItemCourse = {
      id: this.itemCourse.id,
      name: this.myForm.get('name')?.value,
      author: this.myForm.get('author')?.value,
      duration: this.myForm.get('duration')?.value,
      type: this.myForm.get('type')?.value,
      price: this.myForm.get('price')?.value,
      description: this.myForm.get('description')?.value,
    }
    this.coursersService.updateToCourse(addItemCourse);
  }

  cancelEdit(){
    this.homeAdmin.isEdit = false;
  }

}
