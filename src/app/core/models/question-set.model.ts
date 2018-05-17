import { Question } from "./question.model";

export class QuestionSet {
    QuestionSetId: number;
    TopicId: number;
    Title: string;
    Questions: Array<Question>;
}