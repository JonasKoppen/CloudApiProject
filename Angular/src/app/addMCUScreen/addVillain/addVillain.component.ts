import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, RootMovie, Movie, Hero, Villain  } from '../../services/movie.service';


@Component({
selector: 'app-villain-add',
templateUrl: './addVillain.component.html',
styleUrls: ['./addVillain.component.scss']
}) 
export class AddVillainComponent{
    constructor(private _svc : MoviesService){
    }

    newVillain: Villain
    villains: Villain[]
    mode:number //ADD = 0, Remove = 1, Change = 2

    ngOnInit(){
        this.newVillain ={
            name:"",
            actor:"",
        }
        this.Update()
    }
    btnClick(){
        switch(this.mode){
            case 0:{
                this._svc.postVillain(this.newVillain).subscribe(result => console.log(result))
                break;
            }
            case 1:{
                this._svc.deleteVillain(this.newVillain).subscribe(result => console.log(result))
                break;  
            }  
            case 2:{
                this._svc.updateVillain(this.newVillain).subscribe(result => console.log(result))
                break;
            }
        }
        console.log(this.newVillain)
         
    }
    btnSetAdd(){
        this.Update()
        this.mode = 0
        this.newVillain ={
            name:"",
            actor:"",
        }
    }
    btnSetRM(){
        this.Update()
        this.mode = 1
    }
    btnSetCH(){
        this.Update()
        this.mode = 2

    }
    Update = () => {
        this._svc.getVillain()
        .subscribe(result => {this.villains = result.data;})
    }
    set SetVillain(value : number)
    {
        for (var i=0;i<this.villains.length; i++){
            if(this.villains[i].id == value)
                this.newVillain = this.villains[i]
        }
        
        console.log(this.newVillain)
        console.log(value)
    }
}
