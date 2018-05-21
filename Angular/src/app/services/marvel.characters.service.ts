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

    getCharacterUnknown(name?,orderBy?,limit?, offset?) : Observable<character>
    {
        var request = ""
        if(name)
        {
            request += 'nameStartsWith='+ name + '&'
        }
        if(orderBy)
        {
            request += "orderBy="+orderBy+"&"
        }
        if(limit > 0 && limit < 100)
        {
            request += 'limit='+limit+'&'
        }
        if(offset > 0)
        {
            if(offset < 0 || offset > (limit + this.totalChars))
            {
                offset = 0;
                
            }
            request += 'offset='+offset+'&'
        }
        
        var myHash = this.createHash();
        var req = 'https://gateway.marvel.com/v1/public/characters?'+ request +'ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<character>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    findCharacterByName(name) : Observable<character>
    {
        var myHash = this.createHash();
        var req = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith='+ name +'&ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<character>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    findCharacterById(id) : Observable<character>
    {
        var myHash = this.createHash();
        var req = 'https://gateway.marvel.com/v1/public/characters/'+ id +'?ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
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
    modified?: Data; //Date
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



