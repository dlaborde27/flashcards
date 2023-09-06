import { Component } from '@angular/core';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private topicSetter:TopicService){};
  setNullSelected(){
    this.topicSetter.setSelectedTopic(null);
  }
}
