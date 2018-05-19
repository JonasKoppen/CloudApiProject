import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class MoviesService {
    apikey = "acdb5b6c98e4a5408e05093f4d0f6de4";
    privateKey = "fdc26ca47556432b17f1372f3174645ed85853fe";
    timeStamp: number;
    totalChars = 1491;
    

    constructor(private _http: HttpClient) {}

    getMovies() : Observable<Root>
    {
        console.log("requesting:")
        var req = 'http://localhost:5050/api/v1/movie';
        console.log(req);
        return this._http.get<Root>(req)
        .do(data => console.log(JSON.stringify(data)));
    }

    getMoviesById(id) : Observable<Movie>
    {
        var req = 'http://localhost:5050/api/v1/movie/'+ id;
        console.log(req);
        return this._http.get<Movie>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }
}
export interface Root {
    count: number;
    data: Movie[];
  }
  
  export  interface Movie {
    id: number;
    title: string;
    imdbScore: number;
    hero: Hero;
    villain: Villain;
    releaseYear: number;
    director: string;
    phase: number;
    timeLineOrder: number;
  }
  
  export interface Villain {
    id: number;
    name: string;
    actor: string;
  }
  
  export interface Hero {
    id: number;
    name: string;
    actor: string;
    heroName: string;
  }






