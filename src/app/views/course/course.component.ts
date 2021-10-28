import { Component, OnInit } from '@angular/core';
import { Cources } from 'src/app/interfaces/courseModule';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:Cources[] = []

  constructor(private courseService:CourseService) { }

  onSubmit(course:Cources){
    this.courseService.createCourseService(course)
  }

  getCourses(){
    this.courseService.getCoursesService().subscribe((res)=>{
      this.courses = res.map((e)=>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        }
      })
      console.log(this.courses)
    })
  }

  deleteCourse(id:any){
    this.courseService.deleteCourseService(id)
  }
  


  ngOnInit(): void {
    this.getCourses()
  }

}
