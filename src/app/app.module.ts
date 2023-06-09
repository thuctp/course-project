import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ManageCourseComponent } from './components/admin/manage-course/manage-course.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { LearnComponent } from './components/learn/learn.component';
import { CoursesService } from './services/courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { EditCourseComponent } from './components/admin/edit-course/edit-course.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ManageCourseComponent,
    CardCourseComponent,
    LearnComponent,
    HomeAdminComponent,
    EditCourseComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
