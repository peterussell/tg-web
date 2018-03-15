import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question-list/question/question.component';
import { HeaderComponent } from './header/header.component';
import { QuestionService } from './core/services/question.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
