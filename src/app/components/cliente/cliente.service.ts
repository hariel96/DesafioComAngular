import { map, catchError } from 'rxjs/operators';
import { Cliente } from './cliente.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:8093/api/cliente"

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!!', true)
    return EMPTY
  }

}
