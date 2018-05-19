import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { Result, CharacterService, Data, character } from '../../services/marvel.characters.service';


@Component({
selector: 'app-charList',
templateUrl: './characterList.component.html',
styleUrls: ['./characterList.component.scss']
}) 
export class CharacterListComponent implements OnInit{
    data: Data;
    characters: Result[]
    offset = 0
    limit : number[] = [5,10,25,50]
    sortBy = "A-Z"
    sortByCommand = ""
    CharName = ""
    setLimit = 0
    maxAmount = 100


    constructor(private _svc : CharacterService){
    }

    ngOnInit(){
        //this._svc.getCharacterUnknown(this.CharName,this.sortByCommand,this.setLimit,this.offset)
        //      .subscribe(result => this.characters = result.data.results);
        setInterval(this.Update , 1000);
    }

    Update = () =>
    {
      this._svc.getCharacterUnknown(this.CharName,this.sortByCommand,this.setLimit,this.offset)
            .subscribe(result => {this.maxAmount = result.data.total; this.characters = result.data.results});

    }

    get SetLimit()
    {
        return this.setLimit
    }

    set SetLimit(value : number)
    {
        this.setLimit = value
    }

    btnClick(){
        if(this.sortBy == "A-Z"){
            this.sortBy = "Z-A"
            this.sortByCommand = "-name"
        }
        else if(this.sortBy == "Z-A"){
            this.sortBy = "A-Z"
            this.sortByCommand = "name"
        }
        
    }

    btnPrevious(){
        if(this.offset - this.setLimit > 0)
            this.offset = this.offset - this.setLimit
        console.log(this.offset)
    }
    btnNext(){
        if(this.offset + this.setLimit < this.maxAmount)
            this.offset = this.offset + this.setLimit
        console.log(this.offset)
    }
    
}
