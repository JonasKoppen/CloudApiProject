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
    baseLink = "https://gateway.marvel.com/v1/public/characters";
    

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

    getCharacterUnknown(name?,orderBy?,limit?, offset?) : Observable<RootCharacter>
    {
        var request = "?"
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
        var req = this.baseLink + request +'ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<RootCharacter>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    getCharacterByName(name) : Observable<RootCharacter>
    {
        var myHash = this.createHash();
        var req = this.baseLink + '?nameStartsWith='+ name +'&ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<RootCharacter>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    getCharacterById(id) : Observable<RootCharacter>
    {
        var myHash = this.createHash();
        var req = this.baseLink + '/'+ id +'?ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<RootCharacter>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Comics {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Series {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Item {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

export interface Url {
    type: string;
    url: string;
}

export interface Characters {
    id: number;
    name: string;
    description: string;
    modified?: Date;
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
    results: Characters[];
}

export interface RootCharacter {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}




  
