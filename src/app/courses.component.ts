import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector : 'courses',
    template : `
   <!--<h2> {{ 'Title: ' + title }} </h2>-->
   <h2> {{ 'Title: ' + getTitle() }} </h2>
    <ul>
        <li *ngFor="let course of coursesList">
        {{course}}
        </li>
    </ul>
    <div (click)="onDivClick()">
    <button (click)="onOpenClick()"class="btn btn-primary" [class.active]="isActive"> Open </button>
    <button (click)="onCancelClick($event)" class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'red'"> Cancel </button>
    </div>

    <br><label>Enter and press shift: </label><input (keyup.shift) ="onKeyUp($event)" value="Watch console--"/>
    <br>Email # <input #email (keyup.enter) ="onKeyUpEmail(email.value)"/>
    <!-- Dynamic step by step-->
    <br>Name # <input [value]="name" (keyup.enter) ="name=$event.target.value; onKeyUpName()"/>
    <br>Description # 
    <input [(ngModel)]="description" (keyup.enter) ="onKeyUpDescription()"/>


    <h3>Displaying object values using Pipes</h3>
    {{myCourse.name | uppercase}}
    <br> 
    {{myCourse.dec | number:'4.2-3' }}
    {{myCourse.num | currency: 'INR' :true : '3.2-3'}}

    <h3> Custom Pipe </h3><br>
    {{'Data: '+ data | summary : 100}}

    `
})
export class CourseComponent{

    //title = "List of Courses";
    getTitle()
    { return "List of Courses";}
    coursesList;

    constructor(service: CoursesService)
    {
        this.coursesList = service.getCoursesList();
    }

    isActive = false;

    onDivClick($event)
    {
    console.log("div is clicked");
    }
    onOpenClick(){
    console.log("Open is clicked");  //will get rendered followed with the div message.
    }
    onCancelClick($event){
    $event.stopPropagation();   //helps stopping event bubbling
    console.log("cancel is clicked", $event);
    }

    onKeyUp($event){
        console.log("Shift key presed. Value enetered is : ", $event.target.value);
        //Or in th input tag pass $event and herein the function compare
        //with the $event.keycode and display a message.

        //use $event.target.value to get the value enterd in textbox
    }



    /// Implementing 2 way binding steep by step
    onKeyUpEmail(email)
    {
        console.log("email id: ", email)
    }

    name= "Indu Nadella";
    onKeyUpName(){
        console.log("entered or modifield name: ", this.name);
    }

    description ="Hello entered description..";
    onKeyUpDescription()
    {
        console.log("entered or changed Description: ", this.description);
    }

    myCourse =
    {
        name: "Course1",
        id: "1234",
        num: 1234556.1234567,
        dec: 122.34245
    }

    data = "Pipes Every application starts out with what seems like a simple task: get data, transform them, and show them to users. Getting data could be as simple as creating a local variable or as complex as streaming data over a WebSocket. Once data arrives, you could push their raw toString values directly to the view, but that rarely makes for a good user experience. For example, in most use cases, users prefer to see a date in a simple format like April 15, 1988 rather than the raw string format Fri Apr 15 1988 00:00:00 GMT-0700 (Pacific Daylight Time).";
}