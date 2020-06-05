import { catchError, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Evento } from './evento.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  baseUrl = "http://localhost:8093/api/evento"


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.baseUrl, evento).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!!', true)
    return EMPTY
  }

  findAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseUrl);
  }

  readById(id: number): Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Evento>(url);
  }

  update(evento: Evento): Observable<Evento> {
    const url = `${this.baseUrl}/${evento.id}`
    return this.http.put<Evento>(url, evento)
  }

  delete(id: number): Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Evento>(url)
  }
}
