import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './views/course/course.component';
import { SingleCourseComponent } from './views/single-course/single-course.component';

const routes: Routes = [
  {path:'',component:CourseComponent},
  {path:'singleCourse/:id',component:SingleCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
