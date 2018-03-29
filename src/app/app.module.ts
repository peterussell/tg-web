import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { QuestionSetComponent } from './question-set/question-set.component';
import { QuestionComponent } from './question-set/question/question.component';
import { HeaderComponent } from './header/header.component';
import { QuestionService } from './core/services/question.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './core/services/json.service';
import { QuestionSelectorComponent } from './question-selector/question-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionSetComponent,
    QuestionComponent,
    HeaderComponent,
    QuestionSelectorComponent
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
