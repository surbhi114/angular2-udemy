import { CoursesService } from './courses.service';

import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `<h2>{{ title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>
                <h3>Courses in Details</h3>
                <course></course>
                <hr>
                <h3>My stuff</h3>
                <button class="btn btn-primary" [class.disabled]="isDisabled" 
                [style.backgroundColor]="isGreen ? 'green' : 'red' " (click) = "onSave($event)">Save</button>
                <br><br>
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/><hr>
                `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isDisabled = false;
    isGreen = false;
    getTitle(){
        //this can be access from html using {{ getTitle() }}
        return this.title;
    }
    onSave($event){
        console.log("Save clicked", $event);
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    email = "abc";
    onKeyUp(){
        console.log("Enter was pressed with the value: ", this.email);
    }
}