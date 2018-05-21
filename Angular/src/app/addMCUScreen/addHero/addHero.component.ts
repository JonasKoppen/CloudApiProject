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
    heroes: Hero[]
    mode:number //ADD = 0, Remove = 1, Change = 2

    ngOnInit(){
        this.newHero ={
            name:"",
            heroName:"",
            actor:"",
        }
        this.Update()
    }

    btnClick(){
        switch(this.mode){
            case 0:{
                this._svc.postHero(this.newHero).subscribe(result => console.log(result))
                break;
            }
            case 1:{
                this._svc.deleteHero(this.newHero).subscribe(result => console.log(result))
                break;  
            }  
            case 2:{
                this._svc.updateHero(this.newHero).subscribe(result => console.log(result))
                break;
            }
        }
        console.log(this.newHero)
         
    }
    btnSetAdd(){
        this.Update()
        this.mode = 0
        this.newHero ={
            name:"",
            heroName:"",
            actor:"",
        }
    }
    btnSetRM(){
        this.Update()
        this.mode = 1
    }
    btnSetCH(){
        this.Update()
        this.mode = 2

    }
    Update = () => {
        this._svc.getHero()
        .subscribe(result => {this.heroes = result.data;})
    }
    set SetHero(value : number)
    {
        for (var i=0;i<this.heroes.length; i++){
            if(this.heroes[i].id == value)
                this.newHero = this.heroes[i]
        }
        
        console.log(this.newHero)
        console.log(value)
    }
}
