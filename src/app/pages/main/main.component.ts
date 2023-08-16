import { Component } from '@angular/core';
import { GetUserService } from 'src/app/providers/get-user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public data:GetUserService[]=[];
  displayedColumns:string[] = ['nickname', 'email'];

  constructor(private dataProvider:GetUserService) { }

  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response) =>{
      this.data = (response as GetUserService[]);
    })
  }
}
