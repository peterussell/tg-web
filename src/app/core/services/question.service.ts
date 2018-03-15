import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";

@Injectable()
export class QuestionService {
    questions: Array<Question>;

    constructor() {
        this.questions = new Array<Question>();

        // tmp - dummy data
        this.questions.push(new Question(
            `What is True Airspeed?`,
            `The speed of the aircraft relative to the air mass it's travelling through.`
        ));
        this.questions.push(new Question(
            `Your TAS is 135kt, with tailwind component of 32kt. What is your groundspeed?`,
            `167kt.`
        ));
        this.questions.push(new Question(
            `1nm = ____ feet`,
            `6,080`
        ));
    }

    getAllQuestions() {
        return this.questions.slice();
    }
}