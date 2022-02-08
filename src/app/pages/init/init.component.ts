import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  games: any[] = [];

  constructor( private db: AngularFirestore ) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
      .pipe(
        map( (resp: any) => {
          return resp.map( ( {name, votes}:any ) => ({name, value: votes}) )
        })
      )
      .subscribe( games => {
        // console.log(games);
        this.games = games 
      })
  }

}
