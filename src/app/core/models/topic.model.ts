import { QuestionSet } from "./question-set.model";

export class Topic {
    constructor(
        public topicId: number,
        public title: string,
        public questionSets: Array<QuestionSet>) { }
}