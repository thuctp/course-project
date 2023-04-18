import { Component } from '@angular/core';
import { Course, CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent{
  constructor( private coursesSevice: CoursesService){}

  listCourses : Course[] = [];
  itemEdit : any;

  isEdit : boolean = false;

  ngOnInit(){
    this.listCourses = this.coursesSevice.getNormalCourses();
  }

  getIdEditCourse(id: string){
    this.isEdit = true;
    this.itemEdit = this.listCourses[this.listCourses.findIndex(item => item.id === id)];
    return this.itemEdit;
  }

  getDeleteCourse(id: string){
    this.listCourses.splice(this.listCourses.findIndex(fItem => fItem.id === id), 1);
    this.coursesSevice.deleteCourse(id);
  }

}
