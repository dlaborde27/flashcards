import { Injectable } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  selectedTopic:Topic | undefined;
  
  constructor() { }

  setSelectedTopic(topic: Topic){
    this.selectedTopic = topic;
  }

  getSelectedTopic(){
    return this.selectedTopic;
  }
}
