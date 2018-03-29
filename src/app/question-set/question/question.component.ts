import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../core/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  answerVisible: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  onToggleAnswer() {
    this.answerVisible = !this.answerVisible;
  }

  onMarkForReviewClick(question: Question, event: Event) {
    event.preventDefault();
    console.log(`Marking question for review: "${question.question}"`);
  }

  onReportQuestionClick(question: Question, event: Event) {
    event.preventDefault();
    console.log(`Reporting question: "${question.question}"`);
  }
}
