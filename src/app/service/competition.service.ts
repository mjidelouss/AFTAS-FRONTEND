import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = 'http://127.0.0.1:8080/api/competition';

  constructor(private http: HttpClient) {}

  getCompetitions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
