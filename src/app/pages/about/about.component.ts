import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Es una app educativa basada en flashcards diseñada para facilitar el proceso de adquirir conocimientos aplicando implicitamente las técnicas de estudio “active recall” y “spaced repetition”. Con esta aplicación, los estudiantes pueden crear, organizar y revisar sus propias flashcards sobre diversos temas y materias, y la sincronización en la nube permite acceder a ellas y seguir el progreso desde cualquier dispositivo.'; /* Cambie el texto con la descripción de su proyecto */
}
