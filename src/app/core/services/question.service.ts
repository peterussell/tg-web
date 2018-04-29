import { Injectable, Output, EventEmitter } from "@angular/core";

import { Question } from "../models/question.model";
import { QuestionSet } from "../models/question-set.model";
import { JsonService } from "./json.service";

@Injectable()
export class QuestionService {
    questions: Array<Question>;

    @Output() onQuestionsUpdated: EventEmitter<any> = new EventEmitter<any>();

    constructor(private jsonService: JsonService) {}

    updateQuestions(path: string) {
        this.jsonService.getJson(path)
            .subscribe((data) => {
                this.onQuestionsUpdated.emit(data);
            });
    }
}