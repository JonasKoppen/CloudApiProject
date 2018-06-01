import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, RootMovie, Movie  } from '../../services/movie.service';


@Component({
selector: 'app-movie',
templateUrl: './movie.component.html',
styleUrls: ['./movie.component.scss']
}) 
export class MovieComponent implements OnInit{
    constructor(private _svc : MoviesService){
    }

    movies: Movie[]
    offset = 0
    limit : number[] = [5,10,25,50]
    sortByList = ["title", "IMDBScore", "ReleaseYear", "Phase", "TimeLineOrder"]
    sortBy="title"
    dir = "asc"
    movieName = ""
    setLimit = 0
    maxAmount = 100

    imageUrl : string;
    movie : Movie;

    ngOnInit(){
        this._svc.getMovies()
        .subscribe(result => {this.movies = result.data; this.maxAmount = result.count;})
        //setInterval(this.Update , 3000);
    }

    Update = () =>
    {
        this._svc.getMovies(this.movieName,0,this.sortBy,this.dir)
        .subscribe(result => {this.movies = result.data; this.maxAmount = result.count;})
    }

    get SetSort()
    {
        return this.sortBy
    }

    set SetSort(value : string)
    {
        this.sortBy = value
        console.log(value)
        this.Update()
    }

    get SetLimit()
    {
        return this.setLimit
    }

    set SetLimit(value : number)
    {
        this.setLimit = value
        this.Update()
    }

    btnClick(){
        if(this.dir == "asc"){
            this.dir = "desc"
        }
        else if(this.dir == "desc"){
            this.dir = "asc"
        }
        this.Update()
    }

    btnPrevious(){
        if(this.offset - this.setLimit > 0)
            this.offset = this.offset - this.setLimit
        console.log(this.offset)
        this.Update()
    }

    btnNext(){
        if(this.offset + this.setLimit < this.maxAmount)
            this.offset = this.offset + this.setLimit
        console.log(this.offset)
        this.Update()
    }

    pressMovie(id){
        this._svc.getMoviesById(id).subscribe(result => this.movie = result);
        console.log("you presse me")
        console.log(id)
    }
}
