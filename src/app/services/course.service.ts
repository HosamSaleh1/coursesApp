import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cources } from '../interfaces/courseModule';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private firestore:AngularFirestore) { }

  createCourseService(course:Cources){
    return this.firestore.collection('courses').add(course)
  }

  getCoursesService(){
    return this.firestore.collection('courses').snapshotChanges()
  }

  deleteCourseService(courseID:any){
    return this.firestore.doc('courses/' + courseID).delete()
  }

  getSingleCourseService(id:any){
    return this.firestore.doc('courses/'+id).valueChanges()
  }

  updateCourseService(id:any,course:Cources){
    return this.firestore.doc('courses/' + id).update(course)
  }
  
}
