import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, Movies } from '../services/movie.service';


@Component({
selector: 'app-movie',
templateUrl: './movie.component.html',
styleUrls: ['./movie.component.scss']
}) 
export class MovieComponent implements OnInit{
    data: Movies = null

    constructor(private _svc : MoviesService){
    }

    ngOnInit(){
        this._svc.getMoviesById(1)
              .subscribe(result => this.data = result);
    }
}
