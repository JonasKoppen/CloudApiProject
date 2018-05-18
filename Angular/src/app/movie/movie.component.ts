import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, Movie, Root } from '../services/movie.service';


@Component({
selector: 'app-movie',
templateUrl: './movie.component.html',
styleUrls: ['./movie.component.scss']
}) 
export class MovieComponent implements OnInit{
    data: Root = null

    constructor(private _svc : MoviesService){
    }

    ngOnInit(){
        var tempData: Root;
        this._svc.getMovies()
              .subscribe(result => this.data = result.movies[0]);
    }
}
