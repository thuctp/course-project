import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LearnComponent } from './components/learn/learn.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ManageCourseComponent } from './components/admin/manage-course/manage-course.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "learn",
    component: LearnComponent
  },
  {
    path: "admin",
    component: HomeAdminComponent
  },
  {
    path: "add-course",
    component: ManageCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
