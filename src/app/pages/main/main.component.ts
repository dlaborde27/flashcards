import { Component } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Topic } from 'src/app/interfaces/topic';
import { DialogBodyComponent } from 'src/app/shared/dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationDeckComponent } from 'src/app/shared/dialog-information-deck/dialog-information-deck.component';
import { DialogConfirmationDeckComponent } from 'src/app/shared/dialog-confirmation-deck/dialog-confirmation-deck.component';
import { DialogUpdateTopicComponent } from 'src/app/shared/dialog-update-topic/dialog-update-topic.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public data: Topic[] = [];

  constructor(
    private dataProvider: DataService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataProvider.getResponseTopic().subscribe((response) => {
      this.data = response as Topic[];
    });
  }
  openDialog() {
    const dialogFD = this.matDialog.open(DialogBodyComponent, {
      width: '350px',
    });

    dialogFD.afterClosed().subscribe((response) => {
      if (!response) return;
      this.data.push(response as Topic);
    });
  }

  deleteTopic(data: Topic) {
    this.dataProvider
      .deleteTopic('/topic/delete/' + data.id)
      .subscribe((response) => {
        console.log('eliminado');
        this.data = this.data.filter((elemento) => elemento.id !== data.id);
        this.matDialog.open(DialogConfirmationDeckComponent, {
          width: '350px',
          data: data,
        });
      });
  }

  openDialogInformationDeck(data: Topic) {
    this.matDialog.open(DialogInformationDeckComponent, {
      width: '350px',
      data: data,
    });
  }

  openDialogUpdate(topic: Topic) {
    const dialogFD = this.matDialog.open(DialogUpdateTopicComponent, {
      width: '350px',
      data: topic,
    });
    dialogFD.afterClosed().subscribe((response) => {
      this.ngOnInit();
    });
  }
}