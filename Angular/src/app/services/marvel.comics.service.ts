import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class ComicService {
    apikey = "acdb5b6c98e4a5408e05093f4d0f6de4";
    privateKey = "fdc26ca47556432b17f1372f3174645ed85853fe";
    timeStamp: number;
    totalChars = 1491;
    baseLink = "https://gateway.marvel.com/v1/public/comics";
    

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

    

    getComicById(id) : Observable<ComicRoot>
    {
        var myHash = this.createHash();
        var req = this.baseLink + '/'+ id +'?ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<ComicRoot>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }

    getComicByCharacterId(id) : Observable<ComicRoot>
    {
        var myHash = this.createHash();
        var req = "https://gateway.marvel.com/v1/public/characters" + '/'+ id + '/comics' + '?ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
        console.log(req);
        return this._http.get<ComicRoot>(req)
        //.do(data => console.log(JSON.stringify(data)));
    }
}


    export interface TextObject {
        type: string;
        language: string;
        text: string;
    }

    export interface Url {
        type: string;
        url: string;
    }

    export interface Series {
        resourceURI: string;
        name: string;
    }

    export interface Variant {
        resourceURI: string;
        name: string;
    }

    export interface CollectedIssue {
        resourceURI: string;
        name: string;
    }

    export interface Date {
        type: string;
        date: any;
    }

    export interface Price {
        type: string;
        price: number;
    }

    export interface Thumbnail {
        path: string;
        extension: string;
    }

    export interface Image {
        path: string;
        extension: string;
    }

    export interface Item {
        resourceURI: string;
        name: string;
        role: string;
    }

    export interface Creators {
        available: number;
        collectionURI: string;
        items: Item[];
        returned: number;
    }

    export interface Item2 {
        resourceURI: string;
        name: string;
    }

    export interface Characters {
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

    export interface ComicResult {
        id: number;
        digitalId: number;
        title: string;
        issueNumber: number;
        variantDescription: string;
        description: string;
        modified?: Date;
        isbn: string;
        upc: string;
        diamondCode: string;
        ean: string;
        issn: string;
        format: string;
        pageCount: number;
        textObjects: TextObject[];
        resourceURI: string;
        urls: Url[];
        series: Series;
        variants: Variant[];
        collections: any[];
        collectedIssues: CollectedIssue[];
        dates?: Date[];
        prices: Price[];
        thumbnail: Thumbnail;
        images: Image[];
        creators: Creators;
        characters: Characters;
        stories: Stories;
        events: Events;
    }

    export interface ComicData {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: ComicResult[];
    }

    export interface ComicRoot {
        code: number;
        status: string;
        copyright: string;
        attributionText: string;
        attributionHTML: string;
        etag: string;
        data: ComicData;
    }






