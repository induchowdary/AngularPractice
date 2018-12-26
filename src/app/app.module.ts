import { FavouriteComponent } from './favourite.component';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CourseComponent } from './courses.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { SummaryCustomPipe } from './summary.pipe';
import { GlyastericComponent } from './glyasteric/glyasteric.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NewCourseComponent,
    SummaryCustomPipe,
    GlyastericComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
