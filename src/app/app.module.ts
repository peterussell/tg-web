import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question-list/question/question.component';
import { HeaderComponent } from './header/header.component';
import { QuestionService } from './core/services/question.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './core/services/json.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    QuestionService,
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
