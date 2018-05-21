import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, RootMovie, Movie, Hero, Villain  } from '../../services/movie.service';


@Component({
selector: 'app-hero-add',
templateUrl: './addHero.component.html',
styleUrls: ['./addHero.component.scss']
}) 
export class AddHeroComponent implements OnInit{
    constructor(private _svc : MoviesService){
    }

    newHero: Hero

    ngOnInit(){
        this.newHero ={
            id:0,
            name:"",
            heroName:"",
            actor:"",
        }
    }
}
