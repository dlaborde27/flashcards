import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from 'src/app/providers/data.service';
import { Flashcard } from 'src/app/interfaces/flashcard';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  public dataFlashCard:Flashcard[] = [];
  public dataTopic:Topic[] = [];

  displayedColumns:string[] = ['question', 'answer'];
  topicSelect = new FormControl('');

  constructor(private data:DataService){}

  ngOnInit(){
    this.data.getResponseCard().subscribe((response) => {
      this.dataFlashCard = (response as Flashcard[]);
    })

    this.data.getResponseTopic().subscribe((response) => {
      this.dataTopic = (response as Topic[]);
    })
  }

  selection(id:number){
    this.data.getResponseCardByTopicId(id).subscribe((response) => {
      this.dataFlashCard = (response as Flashcard[]);
    })
  }
}
