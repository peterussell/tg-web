import { Component, OnInit } from '@angular/core';

import { Question } from '../core/models/question.model';
import { QuestionService } from '../core/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Array<Question>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getAllQuestions();
  }

}
