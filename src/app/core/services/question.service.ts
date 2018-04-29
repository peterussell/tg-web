import { Injectable, Output, EventEmitter } from "@angular/core";

import { Question } from "../models/question.model";
import { JsonService } from "./json.service";
import { QuestionSet } from "../models/question-set.model";
import { Course } from "../models/course.model";

@Injectable()
export class QuestionService {
    questions: Array<Question>;

    courses: Array<Course>;

    @Output() onQuestionsUpdated: EventEmitter<Array<Question>> = new EventEmitter<Array<Question>>();

    constructor(private jsonService: JsonService) {}

    updateQuestions(path: string) {
        this.jsonService.getJson(path)
            .subscribe((data) => {
                let newQuestions = new Array<Question>();
                data.questions.map((q) => {
                    newQuestions.push(new Question(q.question, q.answer));
                });
                this.questions = newQuestions.slice();
                this.onQuestionsUpdated.emit(this.questions);
            });
    }
}