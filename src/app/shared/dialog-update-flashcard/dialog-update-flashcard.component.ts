import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flashcard } from 'src/app/interfaces/flashcard';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-dialog-update-flashcard',
  templateUrl: './dialog-update-flashcard.component.html',
  styleUrls: ['./dialog-update-flashcard.component.css']
})
export class DialogUpdateFlashcardComponent {
  constructor(public dialogoRef:MatDialogRef<DialogUpdateFlashcardComponent>,private dato:DataService,
    @Inject(MAT_DIALOG_DATA) public data: any){}
  updateFlashCard(answer:any, question:any){
    this.dato.update('/flashcard/update/'+this.data.id,
    {
      answer:answer.value,
      question:question.value
    }).subscribe((response)=>{
      console.log('actualizado' + response)
      this.dialogoRef.close(response)
    });
  }
}
