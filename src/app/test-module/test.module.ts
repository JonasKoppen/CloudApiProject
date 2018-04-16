import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-test',
  templateUrl: './test.module.html'
})
export class TestModule implements OnInit {
  data: string = "hi";
  loading: boolean;
  apikey = "acdb5b6c98e4a5408e05093f4d0f6de4";
  privateKey="fdc26ca47556432b17f1372f3174645ed85853fe";
  timeStamp: number;

  constructor(private http: Http) {
    var myHash = this.createHash();
    var req = 'https://gateway.marvel.com/v1/public/characters?ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
    console.log(req);
  }

  ngOnInit() {
    this.makeRequest();
  }

  getTimestamp(): number{
      return (Date.now()/1000)
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
    var req = 'https://gateway.marvel.com/v1/public/characters?ts='+ this.timeStamp + '&apikey=' + this.apikey + '&hash=' + myHash;
    console.log(req); 
    this.http.request(req)
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}