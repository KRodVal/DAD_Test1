import { Component, OnInit } from '@angular/core';
import courseData from '../../../assets/json/courses.json';

interface Course {
  id: Number;
  name: String;
  description: String;
  image: String;
  onIt: Boolean;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses : Course[] = courseData;

  constructor() { }

  ngOnInit() {
    
  }

}
