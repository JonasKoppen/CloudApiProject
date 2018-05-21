import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, RootMovie, Movie, Hero, Villain  } from '../../services/movie.service';


@Component({
selector: 'app-villain-add',
templateUrl: './addVillain.component.html',
styleUrls: ['./addVillain.component.scss']
}) 
export class AddVillainComponent{
    constructor(private _svc : MoviesService){
    }

    newVillain: Villain

    ngOnInit(){
        this.newVillain ={
            id:0,
            name:"",
            actor:"",
        }
    }
}
