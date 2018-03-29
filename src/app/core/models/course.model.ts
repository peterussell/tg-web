import { Topic } from "./topic.model";

export class Course {
    constructor(public title: string, public topics: Array<Topic>) { }
}