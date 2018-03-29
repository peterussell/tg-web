import { QuestionSet } from "./question-set.model";

export class Topic {
    constructor(private title: string, private questionSet: QuestionSet) { }
}