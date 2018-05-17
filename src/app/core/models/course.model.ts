import { Topic } from "./topic.model";

export class Course {
    constructor(
        public courseId: number,
        public title: string,
        public topics: Array<Topic>) { }
}