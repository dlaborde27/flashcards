import { Injectable } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  selectedTopic:Topic | any;
  
  constructor() { }

  setSelectedTopic(topic: Topic | any){
    this.selectedTopic = topic;
  }

  getSelectedTopic(){
    return this.selectedTopic;
  }
}
