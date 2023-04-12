import { Component } from '@angular/core';
import { Course, CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor( private coursesService: CoursesService) {}
  // courseList$!: Observable<Course[]>;
  courseList : Course[] = [];

  ngOnInit() {
    this.courseList = this.coursesService.getNormalCourses();
  }
}
