import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cources } from 'src/app/interfaces/courseModule';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  constructor(private courseService:CourseService,private route:ActivatedRoute, private router:Router) { }

  id:any = this.route.snapshot.params.id
  courses:any

  getSingleCource(){
    this.courseService.getSingleCourseService(this.id).subscribe((res)=>{
      this.courses = res
    })
  }

  updateCourse(course:Cources){
    this.courseService.updateCourseService(this.id,course)
    this.router.navigate(['/'])
  }


  ngOnInit(): void {
    this.getSingleCource()
  }

}
