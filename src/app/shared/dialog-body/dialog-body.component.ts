import { Component } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent {
  constructor(public dialogoRef:MatDialogRef<DialogBodyComponent>,private data:DataService){}

  postTopic(name:string, description:string){
    this.data.postTopic('/topic/save',{
      name:name,
      description:description,
      user_id:'0941430688',
    }).subscribe(response => {
      this.dialogoRef.close(response)
    });
  }
}
