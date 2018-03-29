import { Component, OnInit } from '@angular/core';
import { JsonService } from '../core/services/json.service';

@Component({
  selector: 'app-question-selector',
  templateUrl: './question-selector.component.html',
  styleUrls: ['./question-selector.component.css']
})
export class QuestionSelectorComponent implements OnInit {

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    const indexJson = this.jsonService.getJson('courses/index.json').subscribe(data => {
      console.log(data);
    });
  }

}
