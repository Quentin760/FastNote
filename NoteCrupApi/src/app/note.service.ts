import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = 'http://localhost:8080/notes';
  constructor(private http: HttpClient) { }

  /* Method Get ***********************************************************/

  getNote(id:number): Observable<Object> {
    return this.http.get(`http://localhost:8080/notes/${id}`);
  }
  getNoteList(): Observable<any> {
    return this.http.get('http://localhost:8080/notes');
  }
  getNoteByDate(date: Date): Observable<any> {
    return this.http.get('http://localhost:8080/notes/date/${date}');
  }

  /* Methode Post ********************************************************/
  createNote(note: Object): Observable<Object> {
    return this.http.post('http://localhost:8080/notes/create', note);
  }

  /* Methode Put *********************************************************/

  updateNote(id: number, value: any): Observable<Object> {
    return this.http.put('http://localhost:8080/notes', value);
  }

  /* Methode Delete *****************************************************/
  deleteAll(): Observable<any> {
    return this.http.delete('http://localhost:8080/notes/delete', { responseType: 'text'});
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/notes/${id}`, { responseType: 'text' });
  }
}
