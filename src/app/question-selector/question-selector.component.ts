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
    this.loadCourseIndexFromJson('courses/index.json');
  }

  loadCourseIndexFromJson(indexPath: string) {
    this.jsonService.getJson(indexPath).subscribe(json => {
      this.courses = json.courses;
      this.selectCourse(this.courses[0].path); // default to first course
    });
  }

  selectCourse(coursePath: string) {
    if (coursePath === '' || !this.courses) {
      this.selectedCourse = null;
      return;
    }
    this.selectedCourse = this.courses.find(c => c.path === coursePath);
    if (this.selectedCourse) {
      this.topics = this.selectedCourse.topics;
      this.selectTopic(this.selectedCourse.topics[0].path); // default to first topic
    }
  }

  selectTopic(topicPath: string) {
    if (topicPath === '' || !this.topics) {
      this.selectedTopic = null;
      return;
    }
    this.selectedTopic = this.topics.find(t => t.path === topicPath);
    if (this.selectedTopic) {
      this.questionSets = this.selectedTopic.questionSets;
      this.selectQuestionSet(this.selectedTopic.questionSets[0].path);
    }
  }

  selectQuestionSet(questionSetPath: string) {
    if (questionSetPath === '' || !this.questionSets) {
      this.selectedQuestionSet = null;
      return;
    };
    this.selectedQuestionSet = this.questionSets.find(qs => qs.path === questionSetPath);
    if (this.selectedQuestionSet) {
      this.questionService.updateQuestions(this.getFullPathForSelectedQuestionSet());
    }
  }

  private getFullPathForSelectedQuestionSet() {
    if (!this.selectedCourse || !this.selectedTopic || !this.selectedQuestionSet) return '';
    return 'courses/'+this.selectedCourse.path+'/'+this.selectedTopic.path+'/'+this.selectedQuestionSet.path;
  }
}
