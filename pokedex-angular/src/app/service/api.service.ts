import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';

  constructor(private http: HttpClient) { }

  // puxando da api
  get apiListPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(response => response),
      tap(response => {
        response.results.map( (resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            response => resPokemons.status = response
          )

        })
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        response => response
      )
    )
  }

}
