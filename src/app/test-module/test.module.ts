import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-test',
  templateUrl: './test.module.html'
})
export class TestModule implements OnInit {
  data: string;
  loading: boolean;
  apikey = "acdb5b6c98e4a5408e05093f4d0f6de4";
  privateKey="fdc26ca47556432b17f1372f3174645ed85853fe";
  timeStamp: number;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  getTimestamp(): number{
      return Date.now()/1000
  }

  createHash(): string{
      this.timeStamp = this.getTimestamp()
      var prehash : string 
      prehash = this.timeStamp.toString() + this.privateKey + this.apikey
      return Md5.hashStr(prehash).toString()
  }
  makeRequest(): void {
    this.loading = true;
    var myHash = this.createHash();
    this.http.request('https://gateway.marvel.com/v1/public/characters?ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash )
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}