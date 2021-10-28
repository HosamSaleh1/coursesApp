import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CourseComponent } from './views/course/course.component';
import { SingleCourseComponent } from './views/single-course/single-course.component'
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SingleCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAA7daYnx74q3Mm3es6JkM68Zuz_6yzW94",

      authDomain: "courses-nti-app.firebaseapp.com",
    
      projectId: "courses-nti-app",
    
      storageBucket: "courses-nti-app.appspot.com",
    
      messagingSenderId: "314080265540",
    
      appId: "1:314080265540:web:0db1d2769139d4b8dcc311",
    
      measurementId: "G-JVN0YY1PNL"
    
    }),
    AngularFirestoreModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
