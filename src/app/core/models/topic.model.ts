import { QuestionSet } from "./question-set.model";

export class Topic {
    constructor(
        public title: string,
        public path: string,
        public questionSets: Array<QuestionSet>) { }
}