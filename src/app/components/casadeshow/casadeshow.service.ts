import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { CasaDeShow } from './casadeshow.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class CasadeshowService {


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  baseUrl = "http://localhost:8093/api/casadeshow"

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  create(casadeshow: CasaDeShow): Observable<CasaDeShow> {
    return this.http.post<CasaDeShow>(this.baseUrl, casadeshow).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!!', true)
    return EMPTY
  }

  findAll(): Observable<CasaDeShow[]> {
    return this.http.get<CasaDeShow[]>(this.baseUrl);
  }

  readById(id: number): Observable<CasaDeShow> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<CasaDeShow>(url);
  }

  update(casaDeShow: CasaDeShow): Observable<CasaDeShow> {
    const url = `${this.baseUrl}/${casaDeShow.id}`
    return this.http.put<CasaDeShow>(url, casaDeShow)
  }

  delete(id: number): Observable<CasaDeShow> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<CasaDeShow>(url)
  }
}
