import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class WeatherService {
    constructor(private _http: HttpClient) { }

    getCurrentWeather() : Observable<IWeatherResult>
    {
        return this._http.get<IWeatherResult>(`http://api.openweathermap.org/data/2.5/weather?q=Antwerpen&lang=nl&APPID=c29dbdf3ccc2d57a361ceaeac49d9e53`)
        // .do(data => console.log(JSON.stringify(data)));
    }

    getCurrentWeatherAt(location:string) : Observable<IWeatherResult>
    {
        return this._http.get<IWeatherResult>(`http://api.openweathermap.org/data/2.5/weather?q=${location}&lang=nl&APPID=c29dbdf3ccc2d57a361ceaeac49d9e53`)
        // .do(data => console.log(JSON.stringify(data)));
    }
}

declare module namespace {

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

}

