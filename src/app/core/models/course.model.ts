import { Topic } from "./topic.model";

export class Course {
    constructor(
        public title: string,
        public path: string,
        public topics: Array<Topic>) { }
}