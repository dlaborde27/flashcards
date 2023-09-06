import { Component } from '@angular/core';

import { TopicService } from 'src/app/shared/services/topic.service';
import { DataService } from 'src/app/providers/data.service';
import { DatePipe } from '@angular/common';
import { Flashcard } from 'src/app/interfaces/flashcard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-creator',
  templateUrl: './flashcard-creator.component.html',
  styleUrls: ['./flashcard-creator.component.css'],
})
export class FlashcardCreatorComponent {
  public topic: any;

  constructor(
    private topicGetter: TopicService,
    private dataSetter: DataService,
    private date: DatePipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.topic = this.topicGetter.getSelectedTopic();
  }

  postFlashCard(question: string, answer: string) {
    this.dataSetter
      .postFlashCard('/flashcard/save', {
        question: question,
        answer: answer,
        creationDate: this.date.transform(new Date(), 'yyyy-MM-dd'),
        user_id: '0941430688',
      })
      .subscribe((response) => {
        this.router.navigate(['main']);
      });
  }

  // postFlashCard(question:string, answer:string){
  //   this.dataSetter.postFlashCard('/flashcard/save',
  //   {
  //     question:question,
  //     answer:answer,
  //     creationDate: this.date.transform(new Date(), 'yyyy-MM-dd'),
  //     user_id:'0941430688'
  //   }
  //   ).subscribe((response) => {
  //     let flashcard = (response as Flashcard)
  //     this.dataSetter.postFlascard_Topic('/flashcard_topic/save',
  //     {
  //       flashcard_id: flashcard.id,
  //       topic_id: this.topic.id
  //     }).subscribe((response) =>{
  //       this.router.navigate(['main']);
  //     })
  //   })
  // }
}
