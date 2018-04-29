import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Question } from '../core/models/question.model';
import { QuestionService } from '../core/services/question.service';
import { QuestionSet } from '../core/models/question-set.model';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.css']
})
export class QuestionSetComponent implements OnInit {
  public questions: Array<Question>;
  public questionSetTitle: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.onQuestionsUpdated.subscribe(data => {
      // this.questionSetTitle = data.questionSet.title;
      this.questionSetTitle = data.title;
      this.questions = data.questions;
    });
  }

}
