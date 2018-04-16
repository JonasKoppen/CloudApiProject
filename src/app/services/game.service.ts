import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GuessResult } from '../common/GuessTheNumber';
import { Guess } from '../game/input-game/input-game.component';
import { Observable } from 'rxjs/Observable';
import * as moment from "moment"
import "rxjs/add/operator/map";

@Injectable()
export class GameService {

  constructor(private _client : HttpClient) { }

  GetScores() : Observable<IGameScores[]>
  {
      return this._client.get<IGameScores[]>("http://localhost:3000/api/game")
        .map(scores => {scores.forEach(s => s.relDate = moment(s.date).fromNow()); return scores});
  }
  SaveScore(score : IGameScores) : Observable<IGameScores>
  {
      return this._client.post<IGameScores>("http://localhost:3000/api/game", score);
  }
}

export interface IGameScores
{
    date : Date;
    relDate : string;
    attempts : number;
    value : number;
    guesses : Guess[];
}
