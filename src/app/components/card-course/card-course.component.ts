import { Component, Input } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent {
  @Input()
  courseDetails: any;
  @Input()
  index: number = 0;

  constructor( private coursesService: CoursesService ){}

  // buyCourse(id){

  // }
}
