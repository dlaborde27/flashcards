import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { Flashcard } from 'src/app/interfaces/flashcard';
import { Topic } from 'src/app/interfaces/topic';
import { TopicService } from 'src/app/shared/services/topic.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent{
  public flipped:boolean=false;
  toggle() {
    this.flipped = !this.flipped;
  }
  public dataFlashCard:Flashcard[] = [];
  public dataTopic:Topic[] = [];
  public da:Topic | any;
  public coloresPasteles: string[] = [
    '#FFD700', // Amarillo
    '#FFA07A', // Salmón claro
    '#87CEEB', // Azul cielo
    '#98FB98', // Verde menta
    '#FFC0CB', // Rosa claro
    '#DDA0DD', // Lavanda
    '#B0E0E6', // Azul claro
    '#F0E68C', // Amarillo pastel
  ];
  

  indiceAleatorio = Math.floor(Math.random() * this.coloresPasteles.length);
  colorSeleccionado: string = this.coloresPasteles[this.indiceAleatorio]; // Utiliza un color de la lista de colores pasteles

  topicSelect = new FormControl('');
  constructor(private data:DataService, private topicSetter:TopicService){}
  
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

  
 

}
