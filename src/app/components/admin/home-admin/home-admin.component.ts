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

  ngOnInit(){
    this.listCourses = this.coursesSevice.getNormalCourses();
  }
}
