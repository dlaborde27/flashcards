import { Component } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Topic } from 'src/app/interfaces/topic';
import { DialogBodyComponent } from 'src/app/shared/dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationDeckComponent } from 'src/app/shared/dialog-information-deck/dialog-information-deck.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public data:Topic[]=[];

  constructor(private dataProvider:DataService, 
              private matDialog:MatDialog) { }

  ngOnInit(){
    this.dataProvider.getResponseTopic().subscribe((response) => {
      this.data = (response as Topic[])
    })
  }
  openDialog(){
    this.matDialog.open(DialogBodyComponent,{
      width:'350px'
    })
  }

  deleteTopic(id:string){
    this.dataProvider.deleteTopic('/topic/delete/'+id).subscribe(response => {
      console.log("eliminado")
    });
  }

  openDialogInformationDeck(data:Topic){
    this.matDialog.open(DialogInformationDeckComponent,{
      width:'350px',
      data:data
    })
  }
}