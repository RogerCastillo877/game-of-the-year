import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GameService {

   private games: Game[] = [];

  constructor( private http: HttpClient) {}

  getNominados() {

    if( this.games.length > 0 ) {
      // console.log('Desde caché');      
      return of(this.games)
    }else {
      // console.log('Desde Internet');
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
        .pipe(
          tap(
            games => this.games = games
          )
        )
    }
  }

  votarGame( id: string ) {
    return this.http.post(`${ environment.url }/api/goty/${ id }`,{})
      .pipe(
        catchError( err => {
          return of( err.error )          
        })
      )
  }
}
