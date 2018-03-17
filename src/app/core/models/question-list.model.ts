import { Question } from "./question.model";

export class QuestionList {
    constructor(private id: number, private tags: Array<string>, private title: string,
        private questions: Array<Question>) {}
}