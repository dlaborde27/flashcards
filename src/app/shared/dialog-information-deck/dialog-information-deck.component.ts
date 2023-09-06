import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { TopicService } from '../services/topic.service';
@Component({
  selector: 'app-dialog-information-deck',
  templateUrl: './dialog-information-deck.component.html',
  styleUrls: ['./dialog-information-deck.component.css']
})
export class DialogInformationDeckComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private topicSetter:TopicService) { }

  addCard() {
    this.topicSetter.setSelectedTopic(this.data)
    this.router.navigate(['createCard']);
  }
}
