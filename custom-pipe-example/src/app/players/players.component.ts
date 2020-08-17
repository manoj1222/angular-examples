import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any;
  searchName: string = "";

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((data) => this.players = data);
  }

}
