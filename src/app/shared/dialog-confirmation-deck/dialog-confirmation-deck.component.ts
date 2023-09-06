import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation-deck',
  templateUrl: './dialog-confirmation-deck.component.html',
  styleUrls: ['./dialog-confirmation-deck.component.css']
})
export class DialogConfirmationDeckComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
}
