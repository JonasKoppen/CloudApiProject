import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, RootMovie, Movie, Hero, Villain  } from '../../services/movie.service';


@Component({
selector: 'app-movie-add',
templateUrl: './addMovie.component.html',
styleUrls: ['./addMovie.component.scss']
}) 
export class AddMovieComponent implements OnInit{
    constructor(private _svc : MoviesService){
    }

    newMovie: Movie
    heroes: Hero[]
    villains: Villain[]
    mode:number //ADD = 0, Remove = 1, Change = 2

    movies : Movie[];

    ngOnInit(){
        this.newMovie ={
            title:"",
            imdbScore:0,
            hero:null,
            villain:null,
            releaseYear:2018,
            director:null,
            phase:0,
            timeLineOrder:0
        }
        this.Update()

    }

    btnClick(){
        switch(this.mode){
            case 0:{
                this._svc.postMovie(this.newMovie).subscribe(result => console.log(result))
                break;
            }
            case 1:{
                this._svc.deleteMovie(this.newMovie).subscribe(result => console.log(result))
                break;  
            }  
            case 2:{
                this._svc.updateMovie(this.newMovie).subscribe(result => console.log(result))
                break;
            }
        }
        console.log(this.newMovie)
         
    }

    btnSetAdd(){
        this.Update()
        this.mode = 0
        this.newMovie ={
            title:"",
            imdbScore:0,
            hero:null,
            villain:null,
            releaseYear:2018,
            director:null,
            phase:0,
            timeLineOrder:0
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
        this._svc.getVillain()
        .subscribe(result => {this.villains = result.data;})
        this._svc.getMovies()
        .subscribe(result => {this.movies = result.data;})
    }

    set SetHero(value : number)
    {
        for (var i=0;i<this.heroes.length; i++){
            if(this.heroes[i].id == value)
                this.newMovie.hero = this.heroes[i]
        }
        
        console.log(this.newMovie.hero)
        console.log(value)
    }
    set SetVillain(value : number)
    {
        for (var i=0;i<this.villains.length; i++){
            if(this.villains[i].id == value)
                this.newMovie.villain = this.villains[i]
        }
        
        console.log(this.newMovie.villain)
    }
    set SetMovie(value : number)
    {
        for (var i=0;i<this.movies.length; i++){
            if(this.movies[i].id == value)
                this.newMovie = this.movies[i]
        }
        
        console.log(this.newMovie)
    }
    /*
    get SetSort()
    {
        return this.sortBy
    }

    set SetSort(value : string)
    {
        this.sortBy = value
        console.log(value)
    }

    get SetLimit()
    {
        return this.setLimit
    }

    set SetLimit(value : number)
    {
        this.setLimit = value
    }

    btnClick(){
        if(this.dir = "asc"){
            this.dir = "desc"
        }
        else if(this.dir = "desc"){
            this.dir = "asc"
        }
        
    }

    btnPrevious(){
        if(this.offset - this.setLimit > 0)
            this.offset = this.offset - this.setLimit
        console.log(this.offset)
    }
    btnNext(){
        if(this.offset + this.setLimit < this.maxAmount)
            this.offset = this.offset + this.setLimit
        console.log(this.offset)
    }
    pressMovie(id){
        this._svc.getMoviesById(id).subscribe(result => this.movie = result);
        console.log("you presse me")
        console.log(id)
    }
    */
}
