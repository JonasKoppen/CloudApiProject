import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { Result,CharacterService } from '../../services/marvel.characters.service';


@Component({
selector: 'app-welcome',
templateUrl: './welcome.component.html',
}) 
export class WelcomeComponent implements OnInit{
    characters: Result[];

    constructor(private _svc : CharacterService){
    }

    ngOnInit(){
        this._svc.getCharacterUnknown()
              .subscribe(result => this.characters = result.data.results);
    }
}
