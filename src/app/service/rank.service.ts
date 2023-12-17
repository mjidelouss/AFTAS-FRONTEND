import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  private apiUrl = 'http://127.0.0.1:8080/api/ranking';
  private registerApiUrl = 'http://127.0.0.1:8080/api/ranking/register';

  constructor(private http: HttpClient) {}

  registerMemberToCompetition(data: any): Observable<any> {
    return this.http.post(this.registerApiUrl, data);
  }

}
