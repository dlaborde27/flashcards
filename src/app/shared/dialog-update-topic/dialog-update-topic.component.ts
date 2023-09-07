import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-dialog-update-topic',
  templateUrl: './dialog-update-topic.component.html',
  styleUrls: ['./dialog-update-topic.component.css'],
})
export class DialogUpdateTopicComponent {
  constructor(
    public dialogoRef: MatDialogRef<DialogUpdateTopicComponent>,
    private dato: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  updateTopic(name: HTMLInputElement, description: HTMLInputElement){
    this.dato
      .update('/topic/update/' + this.data.id, {
        name: name.value,
        description: description.value,
      })
      .subscribe((response) => {
        this.dialogoRef.close(response);
      });
  }
}
