import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class CharacterService {
    apikey = "acdb5b6c98e4a5408e05093f4d0f6de4";
    privateKey = "fdc26ca47556432b17f1372f3174645ed85853fe";
    timeStamp: number;
    totalChars = 1491;
    

    getTimestamp(): number{
        return (Date.now()/1000)
    }

    createHash(): string{
        this.timeStamp = this.getTimestamp()
        var prehash : string 
        prehash = this.timeStamp.toString() + this.privateKey + this.apikey
        return Md5.hashStr(prehash).toString()
    }
    constructor(private _http: HttpClient) {}

    getCharacterUnknown() : Observable<character>
    {
        var limit = 10;
        var offset = Math.round(Math.random()*(this.totalChars - limit))
        var myHash = this.createHash();
        var req = 'https://gateway.marvel.com/v1/public/characters?'+'limit='+limit + '&offset='+offset+'&ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<character>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    getCharacterSpecific(name) : Observable<character>
    {
        var myHash = this.createHash();
        var req = 'https://gateway.marvel.com/v1/public/characters?name='+ name +'&ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<character>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Item {
    resourceURI: string;
    name: string;
}

export interface Comics {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

export interface Item2 {
    resourceURI: string;
    name: string;
}

export interface Series {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

export interface Item3 {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: Item3[];
    returned: number;
}

export interface Item4 {
    resourceURI: string;
    name: string;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: Item4[];
    returned: number;
}

export interface Url {
    type: string;
    url: string;
}

export interface Result {
    id: number;
    name: string;
    description: string;
    modified: Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Series;
    stories: Stories;
    events: Events;
    urls: Url[];
}

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
}

export interface character {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}



