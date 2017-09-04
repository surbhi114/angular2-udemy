import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  
  courses = [{
    title: "Angular Course",
    rating: 4.879,
    students: 30834,
    price: 190.95,
    releaseDate: new Date(2016, 3, 26),
    details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: "Node JS Course",
    rating: 3.789,
    students: 307,
    price: 120.37,
    releaseDate: new Date(2015, 11, 27),
    details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  }];
  constructor() { }

  ngOnInit() {
  }

}
