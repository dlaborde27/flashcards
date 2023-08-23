import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL: string = 'http://localhost:3000/rest';
  private PATH_FLASHCARD:string = '/flashcard/findAll/json';
  private PATH_TOPIC:string = '/topic/findAll/json';
  private PATH_CARDBYTOPIC:string = '';

  constructor(private http: HttpClient) {}

  getResponseCard(){
    return this.http.get(this.URL + this.PATH_FLASHCARD);
  }

  getResponseTopic(){
    return this.http.get(this.URL + this.PATH_TOPIC);
  }

  getResponseCardByTopicId(id: number){
    this.PATH_CARDBYTOPIC = `/flashcard/findCardByTopic/${id}/json`;
    return this.http.get(this.URL + this.PATH_CARDBYTOPIC);
  }
}
