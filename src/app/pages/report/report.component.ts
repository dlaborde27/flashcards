import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from 'src/app/providers/data.service';
import { Flashcard } from 'src/app/interfaces/flashcard';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/shared/services/topic.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateFlashcardComponent } from 'src/app/shared/dialog-update-flashcard/dialog-update-flashcard.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  public dataFlashCard:Flashcard[] = [];
  public dataTopic:Topic[] = [];
  public da:Topic | any;

  displayedColumns:string[] = ['question', 'answer','update','delete'];
  topicSelect = new FormControl('');

  constructor(private data:DataService, private topicSetter:TopicService, private matDialog:MatDialog){}

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

  deleteFlashCard(flashcard:Flashcard){
    this.data.deleteTopic('/flashcard/delete/'+flashcard.id).subscribe((response)=>{
      console.log('eliminado' + response)
      this.ngOnInit();
    });
  }

  openDialogUpdate(flashcard:Flashcard){
    const dialogFD = this.matDialog.open(DialogUpdateFlashcardComponent,{
      width:'350px',
      data:flashcard
    })
    dialogFD.afterClosed().subscribe((response) =>{
      this.ngOnInit();
    })
  }
}
