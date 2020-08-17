import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getPlayers() {
    return this.httpClient.get("http://demo4690221.mockable.io/getPlayersHistory");
  }

}
