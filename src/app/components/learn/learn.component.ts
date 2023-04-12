import { Component } from '@angular/core';

// this is Observable
import { Observable } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Course, CoursesService } from 'src/app/services/courses.service';

// this is form
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent {
  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder
  ) {}
  courseList$!: Observable<Course[]>;

  name = new FormControl('');

  ngOnInit() {
    this.name.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((val) => {
        console.log(val);
      });
    this.courseList$ = this.coursesService.getCourses().pipe(
      tap((data) => {
        //stop loading;
        console.log(data, "stop loading");
      })
    );

  }
}
