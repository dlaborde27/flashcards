import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from 'src/app/providers/data.service';
import { Flashcard } from 'src/app/interfaces/flashcard';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  public dataFlashCard:Flashcard[] = [];
  public dataTopic:Topic[] = [];
  public da:Topic | any;

  displayedColumns:string[] = ['question', 'answer'];
  topicSelect = new FormControl('');

  constructor(private data:DataService, private topicSetter:TopicService){}

  ngOnInit(){
    this.da=this.topicSetter.getSelectedTopic()


    this.data.getResponseCard().subscribe((response) => {
      this.dataFlashCard = (response as Flashcard[]);
    })

    this.data.getResponseTopic().subscribe((response) => {
      this.dataTopic = (response as Topic[]);
    })

    if(this.da){
      this.selection(Number.parseInt(this.topicSetter.getSelectedTopic()?.id))
    }
  }

  selection(id:number){
    this.data.getResponseCardByTopicId(id).subscribe((response) => {
      this.dataFlashCard = (response as Flashcard[]);
    })
  }
}
