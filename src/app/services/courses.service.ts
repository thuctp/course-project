import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export type Course = {
  id: string,
  name: string,
  image: string,
  author: string,
  duration: number,
  type: string,
  price: number,
  description: string
}

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  course: Subject<any> = new Subject();

  constructor(private router: Router) {
    // setInterval(() => {
    //   this.course.next(this._listCourse[Math.round(Math.random()* 2)])
    // }, 2000)
   }

  private _listCourse: Course[] = [
    {
      id: "1",
      name: "The Complete 2023 Web Development BootcampBecome",
      image: "default.png",
      author: "Alex",
      duration: 50,
      type: "Free",
      price: 0,
      description: "Web Development BootcampBecome a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3."
    },
    {
      id: "2",
      name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      image: "default.png",
      author: "Alex",
      duration: 50,
      type: "Premium",
      price: 1000,
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games."
    },
    {
      id: "3",
      name: "Ultimate AWS Certified Solutions Architect Associate SAA-C03Full",
      image: "default.png",
      author: "Alex",
      duration: 50,
      type: "Free",
      price: 0,
      description: " Practice Exam"
    }
  ]

  getNormalCourses(){
    return ([...this._listCourse])
  }

  getCourses(){
    return of([...this._listCourse]).pipe(
      tap((data) => {
        //start loading;
        console.log("start loading");
      }),
      delay(1000)
    )
  }

  pushToProduct(item: any) {
    this._listCourse.push(item);
    alert("Add New Course Successfully " + item.name);
    this.router.navigate(['/admin']);
    console.log(this._listCourse);

  }

  updateToCourse(item: any) {
    const indexToUpdate = this._listCourse.findIndex(fItem => fItem.id === item.id);
    this._listCourse[indexToUpdate] = item;
    alert("Update Course Successfully " + item.name);
    console.log(this._listCourse);
  }

  deleteCourse(item: any){
    if (confirm('Are you sure you want to delete this item?')) {
      const indexToDelete = this._listCourse.findIndex(fItem => fItem.id === item);
      this._listCourse.splice(indexToDelete, 1);
      this.router.navigate(['/admin']);
    }
  }
}
