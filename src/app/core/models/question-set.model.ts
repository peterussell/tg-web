import { Question } from "./question.model";

export class QuestionSet {
    constructor(private id: number, private tags: Array<string>, private title: string,
        private questions: Array<Question>) {}
}