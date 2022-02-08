import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];
  
  constructor( private gameService: GameService ) { }

  ngOnInit(): void {

    this.gameService.getNominados()
      .subscribe( resp => {
        this.games = resp;
        // console.log(resp);
      })
  }

  votarGame( game: Game ) {
    
    this.gameService.votarGame ( game.id )
      .subscribe( (resp: any) => {
        if( resp.ok ) {
          Swal.fire('Gracias', resp.msg, 'success')
        }    
      });
  }

}
