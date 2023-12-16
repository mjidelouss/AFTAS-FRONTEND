import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://127.0.0.1:8080/api/member/all';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateMember(member: any): Observable<any> {
    const updateApiUrl = `http://127.0.0.1:8080/api/member/${member.id}`;
    return this.http.put(updateApiUrl, member);
  }

  deleteMember(id: number): Observable<any> {
    const url = `http://127.0.0.1:8080/api/member/${id}`;
    return this.http.delete(url);
  }

}
