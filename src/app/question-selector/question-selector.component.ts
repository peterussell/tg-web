import { Component, OnInit } from '@angular/core';
import { JsonService } from '../core/services/json.service';
import { Course } from '../core/models/course.model';
import { Observable } from 'rxjs/Observable';
import { Topic } from '../core/models/topic.model';
import { QuestionSet } from '../core/models/question-set.model';
import { QuestionService } from '../core/services/question.service';

@Component({
  selector: 'app-question-selector',
  templateUrl: './question-selector.component.html',
  styleUrls: ['./question-selector.component.css']
})
export class QuestionSelectorComponent implements OnInit {
  public courses: Array<Course>;
  public topics: Array<Topic>;
  public questionSets: Array<QuestionSet>;

  private selectedCourse: Course;
  private selectedTopic: Topic;
  private selectedQuestionSet: QuestionSet;

  constructor(private jsonService: JsonService, private questionService: QuestionService) {
    this.courses = new Array<Course>();
    this.topics = new Array<Topic>();
    this.questionSets = new Array<QuestionSet>();
  }

  ngOnInit() {
    this.loadCourses('courses');
  }

  loadCourses(coursesPath: string) {
    this.jsonService.getCourses(coursesPath).subscribe(coursesJson => {
      this.courses = coursesJson.courses;
      this.selectCourse(this.courses[0]);
    })
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;

    if (this.selectedCourse !== null) {
      this.topics = course.topics;
      this.selectTopic(this.selectedCourse.topics[0]);
    }
  }

  selectTopic(topic: Topic) {
    this.selectedTopic = topic;

    if (this.selectedTopic !== null) {
      this.questionSets = this.selectedTopic.questionSets;
      this.selectQuestionSet(this.selectedTopic.questionSets[0]);
    }
  }

  selectQuestionSet(questionSet: QuestionSet) {
    this.questionService.updateQuestionSet(1); // tmp, need to get dynamic ID
  }

  onChangeQuestionSet(questionSetId: number) {
    console.log(questionSetId);
  }
}
