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

    getCharacterUnknown() : Observable<Movies>
    {
        var limit = 10;
        var offset = Math.round(Math.random()*(this.totalChars - limit))
        var req = 'https://gateway.marvel.com/v1/public/characters?';
        console.log(req);
        return this._http.get<Movies>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    getCharacterSpecific(name) : Observable<Movies>
    {
        var req = 'https://gateway.marvel.com/v1/public/characters?name=';
        console.log(req);
        return this._http.get<Movies>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }
}

export interface Hero {
    id: number;
    name: string;
    actor: string;
    heroName: string;
}

export interface Villain {
    id: number;
    name: string;
    actor: string;
}

export interface Movies {
    id: number;
    title: string;
    imdbScore: number;
    hero: Hero;
    villain: Villain;
    releaseYear: number;
    director: string;
}



