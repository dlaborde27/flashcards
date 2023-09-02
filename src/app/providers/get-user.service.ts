import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetUserService {
  private URL: string =
    'https://flashcards-production-215e.up.railway.app/rest/user/findAll/json';

  constructor(private http: HttpClient) {}

  getResponse() {
    return this.http.get(this.URL);
  }
}
