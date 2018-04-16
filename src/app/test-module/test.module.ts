import { Component, OnInit } from '@angular/core';
//import {Http, Response} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import { CharacterService, character } from '../services/marvel.characters.service';
//import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-test',
  templateUrl: './test.module.html'
})
export class TestModule implements OnInit {
  nameCharReq: string
  imageUrl : string;
  data: string = "hi";
  apikey = "acdb5b6c98e4a5408e05093f4d0f6de4";
  privateKey = "fdc26ca47556432b17f1372f3174645ed85853fe";
  character: character;
  private _search: string = "Loki";

  constructor(private _svc : CharacterService) {
  }

  ngOnInit() {
    this._svc.getCharacterSpecific(this._search)
          .subscribe(result => this.character = result);
    setInterval(this.ChangeImage , 1000);
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
    this._svc.getCharacterSpecific(this._search)
          .subscribe(result => this.character = result);
  }
}