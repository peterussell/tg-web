import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Question } from '../core/models/question.model';
import { QuestionService } from '../core/services/question.service';
import { QuestionList } from '../core/models/question-list.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questionList: QuestionList;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.onQuestionsUpdated.subscribe(newQuestionList => {
      this.questionList = newQuestionList;
    });
  }

}
