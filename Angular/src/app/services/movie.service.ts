import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Md5} from 'ts-md5/dist/md5';

//Mss hiervan apparte services maken, 1 voor hero, 1 voor movie en 1 voor villain?
@Injectable()
export class MoviesService {
    apikey = "acdb5b6c98e4a5408e05093f4d0f6de4";
    privateKey = "fdc26ca47556432b17f1372f3174645ed85853fe";
    timeStamp: number;
    totalChars = 1491;
    

    constructor(private _http: HttpClient) {}

    getMovies(title?,phase?,sort?,dir?) : Observable<RootMovie>
    {
        var request = ""
        if(title)
        {
            request += 'title='+ title + '&'
        }
        if(phase)
        {
            request += 'phase='+ phase + '&'
        }
        if(sort)
        {
            request += 'sort='+ sort + '&'
        }
        if(dir)
        {
            request += 'dir='+ dir + '&'
        }
        request = request.substring(0,request.length-1)
        console.log("requesting:")
        var req = 'http://localhost:5050/api/v1/movie?'+request;
        console.log(req);
        return this._http.get<RootMovie>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    getMoviesById(id) : Observable<Movie>
    {
        var req = 'http://localhost:5050/api/v1/movie/'+ id;
        console.log(req);
        return this._http.get<Movie>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }
    
    postMovie(movie: Movie): Observable<Movie>{
        return this._http.post<Movie>("http://localhost:5050/api/v1/movie", movie)//.do(data => console.log(JSON.stringify(data)));
    }
    deleteMovie(movie: Movie): Observable<Movie>{

        return this._http.delete<Movie>("http://localhost:5050/api/v1/movie/"+movie.id)//.do(data => console.log(JSON.stringify(data)));
    }
    updateMovie(movie: Movie): Observable<Movie>{
        return this._http.put<Movie>("http://localhost:5050/api/v1/movie", movie)//.do(data => console.log(JSON.stringify(data)));
    }

    getHero(name?,heroName?,sort?,dir?) : Observable<RootHero>
    {
        var request = ""
        if(name)
        {
            request += 'name='+ name + '&'
        }
        if(heroName)
        {
            heroName += 'heroName='+ heroName + '&'
        }
        if(sort)
        {
            request += 'sort='+ sort + '&'
        }
        if(dir)
        {
            request += 'dir='+ dir + '&'
        }
        request = request.substring(0,request.length-1)
        console.log("requesting:")
        var req = 'http://localhost:5050/api/v1/hero?'+request;
        console.log(req);
        return this._http.get<RootHero>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    postHero(hero: Hero): Observable<Hero>{
        return this._http.post<Hero>("http://localhost:5050/api/v1/hero", hero)//.do(data => console.log(JSON.stringify(data)));
    }
    deleteHero(hero: Hero): Observable<Hero>{

        return this._http.delete<Hero>("http://localhost:5050/api/v1/hero/"+hero.id)//.do(data => console.log(JSON.stringify(data)));
    }
    updateHero(hero: Hero): Observable<Hero>{
        return this._http.put<Hero>("http://localhost:5050/api/v1/hero", hero)//.do(data => console.log(JSON.stringify(data)));
    }

    getVillain(name?,sort?,dir?) : Observable<RootVillain>
    {
        var request = ""
        if(name)
        {
            request += 'name='+ name + '&'
        }
        if(sort)
        {
            request += 'sort='+ sort + '&'
        }
        if(dir)
        {
            request += 'dir='+ dir + '&'
        }
        request = request.substring(0,request.length-1)
        console.log("requesting:")
        var req = 'http://localhost:5050/api/v1/villain?'+request;
        console.log(req);
        return this._http.get<RootVillain>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    postVillain(villain: Villain): Observable<Villain>{
        return this._http.post<Villain>("http://localhost:5050/api/v1/villain", villain)//.do(data => console.log(JSON.stringify(data)));
    }
    deleteVillain(villain: Villain): Observable<Villain>{

        return this._http.delete<Villain>("http://localhost:5050/api/v1/villain/"+villain.id)//.do(data => console.log(JSON.stringify(data)));
    }
    updateVillain(villain: Villain): Observable<Villain>{
        return this._http.put<Villain>("http://localhost:5050/api/v1/villain", villain)//.do(data => console.log(JSON.stringify(data)));
    }

    
}
export interface RootMovie {
    count: number;
    data: Movie[];
  }
  
  export  interface Movie {
    id?: number;
    title: string;
    imdbScore: number;
    hero: Hero;
    villain: Villain;
    releaseYear: number;
    director: string;
    phase: number;
    timeLineOrder: number;
  }

  export interface RootVillain {
    count: number;
    data: Villain[];
  }
  
  export interface Villain {
    id?: number;
    name: string;
    actor: string;
  }

  export interface RootHero {
    count: number;
    data: Hero[];
  }
  
  export interface Hero {
    id?: number;
    name: string;
    actor: string;
    heroName: string;
  }






