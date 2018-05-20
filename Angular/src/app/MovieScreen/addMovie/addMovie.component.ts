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

    movie : Movie;

    ngOnInit(){
        this.newMovie ={
            id:0,
            title:"",
            imdbScore:0,
            hero:null,
            villain:null,
            releaseYear:2018,
            director:null,
            phase:0,
            timeLineOrder:0
        }
        this._svc.getHero()
        .subscribe(result => {this.heroes = result.data;})
        this._svc.getVillain()
        .subscribe(result => {this.villains = result.data;})
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
