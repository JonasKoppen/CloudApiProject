import { Component, OnInit } from '@angular/core';
//import {Http, Response} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import { CharacterService , RootCharacter, Result} from '../../services/marvel.characters.service';
//import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-charProfile',
  templateUrl: './charProfile.component.html',
  styleUrls: ['./charProfile.component.scss']
})
export class CharProfileModule implements OnInit {
  nameCharReq: string
  imageUrl : string;
  character: RootCharacter;
  private _search: string = "Loki";
  characters: Result[];

  constructor(private _svc : CharacterService) {
  }

  ngOnInit() {
    this._svc.findCharacterByName(this._search)
          .subscribe(result => this.character = result);
    setInterval(this.ChangeImage , 1000);
    this.GetAllChar()
  }

  ChangeImage = () =>
    {
      if(this.character != null){
        console.log(this.character.data.results[0].thumbnail.path +'.'+ this.character.data.results[0].thumbnail.extension);
        this.imageUrl = this.character.data.results[0].thumbnail.path +'.'+ this.character.data.results[0].thumbnail.extension;
      }
      
    }

  get CharReq(){
    console.log(this._search + "req")
    return this._search
  }

  set CharReq(name : string){
    console.log(name)
    this._search = name;
    this._svc.findCharacterByName(this._search)
          .subscribe(result => this.character = result);
  }

  GetAllChar(){
    this._svc.getCharacterUnknown()
          .subscribe(result => this.characters = result.data.results);
  }
}