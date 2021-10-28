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


}
