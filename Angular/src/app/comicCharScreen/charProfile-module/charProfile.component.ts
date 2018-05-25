import { Component, OnInit, Input } from '@angular/core';
//import {Http, Response} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import { CharacterService , RootCharacter, Characters} from '../../services/marvel.characters.service';
import { ComicResult, ComicService } from '../../services/marvel.comics.service';
import { Router } from '@angular/router';
//import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-charProfile',
  templateUrl: './charProfile.component.html',
  styleUrls: ['./charProfile.component.scss']
})
export class CharProfileModule implements OnInit {
  charId: number
  data: Characters;
  comics: ComicResult[]
  offset = 0
  limit : number[] = [5,10,25,50]
  setLimit = 10
  maxAmount = 100

  imageUrl : string;
  character : Characters;
  hasNext = false
  hasPrevious = false


  constructor(private _characterSVC : CharacterService, private _comicSVC: ComicService, private route: Router){
      //this.character = this.dummyCharacter
      
      //this.maxAmount = this.dummyCharacters.count
      //this.character.comics.items
  }

  ngOnInit(){
      //setInterval(this.Update , 10000);
      setInterval(this.UpdateImage , 1000);
  }

  Update = () =>
  { 
    this._characterSVC.getCharacterById(this.charId).subscribe(result => this.character = result.data.results[0])
    this._comicSVC.getComicByCharacterId(this.charId,this.setLimit,this.offset).subscribe(result => {
                                                                                          this.comics = result.data.results;
                                                                                          this.maxAmount = result.data.count;
                                                                                          if(this.offset + this.setLimit < this.maxAmount)
                                                                                              this.hasNext = true
                                                                                        })
      if(this.character != null){
          //console.log(this.character.thumbnail.path +'.'+ this.character.thumbnail.extension);
          this.imageUrl = this.character.thumbnail.path +'.'+ this.character.thumbnail.extension;
          
      }
      if(this.offset + this.setLimit < this.maxAmount)
        this.hasNext = true
      console.log(this.hasNext)
      console.log(this.maxAmount)
  //console.log(this.character)
  }

  UpdateImage = () =>
  {
      if(this.character != null){
          //console.log(this.character.thumbnail.path +'.'+ this.character.thumbnail.extension);
          this.imageUrl = this.character.thumbnail.path +'.'+ this.character.thumbnail.extension;
      }
  }

  @Input()
  set CharId(value: number){
    this.charId = value
    this.Update();
  }
  get SetLimit()
  {
      return this.setLimit
  }

  set SetLimit(value : number)
  {
      this.setLimit = value;
      this.Update();
  }

  ClickComic(id : number) 
  {
      console.log(id)
      this.route.navigateByUrl('/comic/'+ id);
  };

  btnPrevious(){
    if(this.offset - this.setLimit > 0)
        this.offset = this.offset - this.setLimit
    console.log(this.offset)
    this.Update()
}
btnNext(){
    if(this.offset + this.setLimit < this.maxAmount)
        this.offset = this.offset + this.setLimit
    console.log(this.offset)
    this.Update();
}
  
  dummyCharacter: Characters =
              {
                  "id": 1010735,
                  "name": "Drax",
                  "description": "",
                  "thumbnail": {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/d0/526032deabbff",
                      "extension": "jpg"
                  },
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010735",
                  "comics": {
                      "available": 56,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010735/comics",
                      "items": [
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/61519",
                              "name": "All-New Guardians of the Galaxy (2017) #7"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62149",
                              "name": "All-New Guardians of the Galaxy Vol. 1: Communication Breakdown (Trade Paperback)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62151",
                              "name": "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60513",
                              "name": "All-New Wolverine (2015) #23"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4788",
                              "name": "Annihilation (2006) #1"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5078",
                              "name": "Annihilation (2006) #2"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5230",
                              "name": "Annihilation (2006) #3"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5529",
                              "name": "Annihilation (2006) #4"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5655",
                              "name": "Annihilation (2006) #5"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4221",
                              "name": "Annihilation: Nova (2006) #2"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4473",
                              "name": "Annihilation: Nova (2006) #4"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/3985",
                              "name": "Annihilation: Prologue (2006)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66602",
                              "name": "Annihilation: The Complete Collection Vol. 1 (Trade Paperback)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4822",
                              "name": "Annihilation: The Nova Corps (2006) #1"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/55334",
                              "name": "The Astonishing Ant-Man Vol. 3: The Trial of Ant-Man (Trade Paperback)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/7085",
                              "name": "Avengers (1963) #219"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/7087",
                              "name": "Avengers (1963) #220"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6930",
                              "name": "Avengers Annual (1967) #16"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8032",
                              "name": "Captain Marvel (1968) #43"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8033",
                              "name": "Captain Marvel (1968) #44"
                          }
                      ],
                      "returned": 20
                  },
                  "series": {
                      "available": 34,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010735/series",
                      "items": [
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/23058",
                              "name": "All-New Guardians of the Galaxy (2017 - Present)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/22776",
                              "name": "All-New Guardians of the Galaxy Vol. 1: Communication Breakdown (2017)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/22778",
                              "name": "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
                              "name": "All-New Wolverine (2015 - Present)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/3613",
                              "name": "Annihilation (2006 - 2007)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/1081",
                              "name": "Annihilation: Nova (2006)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/1077",
                              "name": "Annihilation: Prologue (2006)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/24256",
                              "name": "Annihilation: The Complete Collection Vol. 1 (2018)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/1115",
                              "name": "Annihilation: The Nova Corps (2006)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                              "name": "Avengers (1963 - 1996)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                              "name": "Avengers Annual (1967 - 1994)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/2000",
                              "name": "Captain Marvel (1968 - 1979)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/22429",
                              "name": "Deadpool and The Secret Defenders (2017)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/20801",
                              "name": "Drax (2015 - Present)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/912",
                              "name": "Drax the Destroyer (2005)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/20465",
                              "name": "Guardians of the Galaxy (2015 - 2017)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/16410",
                              "name": "Guardians of the Galaxy (2013 - Present)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/19019",
                              "name": "Guardians of the Galaxy (1990 - 1994)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/4885",
                              "name": "Guardians of the Galaxy (2008 - 2010)"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/series/23674",
                              "name": "Guardians of the Galaxy (2017 - Present)"
                          }
                      ],
                      "returned": 20
                  },
                  "stories": {
                      "available": 57,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010735/stories",
                      "items": [
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4847",
                              "name": "1 of 4 - 4XLS",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5923",
                              "name": "1 of 1",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5950",
                              "name": "Annihilation: Nova (2006) #2",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5956",
                              "name": "1 of 6 - Annihilation",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5958",
                              "name": "2 of 6 - Annihilation",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5960",
                              "name": "3 of 6 - Annihilation",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5962",
                              "name": "4 of 6 - Annihilation",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5964",
                              "name": "5 of 6 - Annihilation",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/6149",
                              "name": "Cover #6149",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/14709",
                              "name": "Avengers (1963) #219",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/14713",
                              "name": "Avengers (1963) #220",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/17388",
                              "name": "Avengers Annual (1967) #16",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/18298",
                              "name": "Cover #18298",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/18300",
                              "name": "Cover #18300",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/35365",
                              "name": "You're Invited!",
                              "type": "interiorStory"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39236",
                              "name": "Temper Tantrum",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39238",
                              "name": "Demand This, Hulkie!",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39246",
                              "name": "Can Even Drax Prevail Against the Power of Maxam",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39304",
                              "name": "Old Foes",
                              "type": "cover"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44694",
                              "name": "Technarchy 1 of 2",
                              "type": "cover"
                          }
                      ],
                      "returned": 20
                  },
                  "events": {
                      "available": 3,
                      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010735/events",
                      "items": [
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/events/229",
                              "name": "Annihilation"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
                              "name": "Blood and Thunder"
                          },
                          {
                              "resourceURI": "http://gateway.marvel.com/v1/public/events/295",
                              "name": "Realm of Kings"
                          }
                      ],
                      "returned": 3
                  },
                  "urls": [
                      {
                          "type": "detail",
                          "url": "http://marvel.com/characters/15/drax?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                      },
                      {
                          "type": "wiki",
                          "url": "http://marvel.com/universe/Drax?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                      },
                      {
                          "type": "comiclink",
                          "url": "http://marvel.com/comics/characters/1010735/drax?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                      }
                  ]
              }

  dummyCharacters = {
      "offset": 5,
      "limit": 5,
      "total": 34,
      "count": 5,
      "results": [
          {
              "id": 1011386,
              "name": "Karma",
              "description": "",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/00/50febe78aacca",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011386",
              "comics": {
                  "available": 52,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011386/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40802",
                          "name": "Astonishing X-Men (2004) #52"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40808",
                          "name": "Astonishing X-Men (2004) #56"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40807",
                          "name": "Astonishing X-Men (2004) #57"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45819",
                          "name": "Astonishing X-Men (2004) #58"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45820",
                          "name": "Astonishing X-Men (2004) #59"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45821",
                          "name": "Astonishing X-Men (2004) #60"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45822",
                          "name": "Astonishing X-Men (2004) #61"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45823",
                          "name": "Astonishing X-Men (2004) #62"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45824",
                          "name": "Astonishing X-Men (2004) #63"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45825",
                          "name": "Astonishing X-Men (2004) #64"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45826",
                          "name": "Astonishing X-Men (2004) #65"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45827",
                          "name": "Astonishing X-Men (2004) #66"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45828",
                          "name": "Astonishing X-Men (2004) #67"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45829",
                          "name": "Astonishing X-Men (2004) #68"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10322",
                          "name": "New Mutants (2003) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24262",
                          "name": "New Mutants (2009) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/27398",
                          "name": "New Mutants (2009) #1 (BENJAMIN VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26051",
                          "name": "New Mutants (2009) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26052",
                          "name": "New Mutants (2009) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26053",
                          "name": "New Mutants (2009) #4"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 11,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011386/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
                          "name": "Astonishing X-Men (2004 - 2013)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/563",
                          "name": "New Mutants (2003 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/7455",
                          "name": "New Mutants (2009 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24008",
                          "name": "New Mutants by Zeb Wells: The Complete Collection (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1763",
                          "name": "New Mutants Classic Vol. 1 (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1764",
                          "name": "New Mutants Classic Vol. 2 (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13519",
                          "name": "New Mutants Classic Vol. 6 (2010 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1186",
                          "name": "New Mutants Vol 1: Back to School (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/267",
                          "name": "New Mutants Vol 1: Back to School (2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                          "name": "Uncanny X-Men (1963 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2104",
                          "name": "X-Men: Alpha (1995)"
                      }
                  ],
                  "returned": 11
              },
              "stories": {
                  "available": 68,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011386/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/596",
                          "name": "New Mutants (2003) #8",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/597",
                          "name": "Interior #597",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1296",
                          "name": "New Mutants (2003) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1297",
                          "name": "Interior #1297",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1596",
                          "name": "New Mutants (2003) #10",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1597",
                          "name": "Interior #1597",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1888",
                          "name": "New Mutants (2003) #9",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1889",
                          "name": "Interior #1889",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1901",
                          "name": "New Mutants (2003) #12",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1902",
                          "name": "Interior #1902",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1903",
                          "name": "New Mutants (2003) #13",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1904",
                          "name": "Interior #1904",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2079",
                          "name": "New Mutants (2003) #7",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2080",
                          "name": "Interior #2080",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2155",
                          "name": "New Mutants (2003) #11",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2156",
                          "name": "Interior #2156",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2533",
                          "name": "New Mutants (2003) #6",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2534",
                          "name": "Interior #2534",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/26240",
                          "name": "New Mutants (2003) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/26241",
                          "name": "The Wind Knows My Name",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011386/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
                          "name": "Age of Apocalypse"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                          "name": "Fear Itself"
                      }
                  ],
                  "returned": 2
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/1121/karma?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Karma?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011386/karma?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  }
              ]
          },
          {
              "id": 1009385,
              "name": "Karnak",
              "description": "",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/52740e5d96fcc",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009385",
              "comics": {
                  "available": 103,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009385/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/62095",
                          "name": "All-New X-Men: Inevitable Vol. 4 - IVX (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/7050",
                          "name": "Avengers (1963) #188"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/37287",
                          "name": "Avengers Academy (2010) #2 (2ND PRINTING VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/59508",
                          "name": "Civil War II Fallout (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/58669",
                          "name": "CIVIL WAR II: ULYSSES  (2016) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/58670",
                          "name": "CIVIL WAR II: ULYSSES  (2016) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/58671",
                          "name": "CIVIL WAR II: ULYSSES  (2016) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/57878",
                          "name": "CIVIL WAR II: ULYSSES INFINITE COMIC (2016) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/57879",
                          "name": "CIVIL WAR II: ULYSSES INFINITE COMIC (2016) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/57880",
                          "name": "CIVIL WAR II: ULYSSES INFINITE COMIC (2016) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/57881",
                          "name": "CIVIL WAR II: ULYSSES INFINITE COMIC (2016) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/57882",
                          "name": "CIVIL WAR II: ULYSSES INFINITE COMIC (2016) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/57883",
                          "name": "CIVIL WAR II: ULYSSES INFINITE COMIC (2016) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/56721",
                          "name": "Daredevil (2015) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8268",
                          "name": "Daredevil (1964) #275"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8271",
                          "name": "Daredevil (1964) #278"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8272",
                          "name": "Daredevil (1964) #279"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8275",
                          "name": "Daredevil (1964) #281"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/64560",
                          "name": "Daredevil Epic Collection: Heart of Darkness (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8548",
                          "name": "Earth X (1999) #1"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 50,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009385/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22729",
                          "name": "All-New X-Men: Inevitable Vol. 4 - IVX (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                          "name": "Avengers (1963 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
                          "name": "Avengers Academy (2010 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/21674",
                          "name": "Civil War II Fallout (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/21413",
                          "name": "CIVIL WAR II: ULYSSES  (2016 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/21101",
                          "name": "CIVIL WAR II: ULYSSES INFINITE COMIC (2016)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
                          "name": "Daredevil (1964 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20780",
                          "name": "Daredevil (2015 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23523",
                          "name": "Daredevil Epic Collection: Heart of Darkness (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
                          "name": "Earth X (1999)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
                          "name": "Earth X (New (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1263",
                          "name": "Essential Fantastic Four Vol. 4 (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                          "name": "Fantastic Four (1961 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2123",
                          "name": "Fantastic Four (1996 - 1997)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
                          "name": "Fantastic Four (1998 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2012",
                          "name": "Fantastic Four Annual (1963 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/341",
                          "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 2 TPB (2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2445",
                          "name": "Fantastic Four/Inhumans (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1812",
                          "name": "Heroes Reborn: Fantastic Four (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2027",
                          "name": "Inhumans (2000)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 108,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009385/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5331",
                          "name": "Ultimate Fantastic Four Annual (2005) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5332",
                          "name": "1 of 1 - Inhumans",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12759",
                          "name": "Fantastic Four (1961) #248",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12760",
                          "name": "Nightmare!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12898",
                          "name": "The Marvel Rage!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13145",
                          "name": "Suddenly ... The Secret Defenders",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13151",
                          "name": "It's Always Darkest Before the ... DOOM!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13258",
                          "name": "Fantastic Four (1961) #391",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13259",
                          "name": "If Death Be Our Destiny--!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13341",
                          "name": "At the Mercy of Maximus!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/14638",
                          "name": "Avengers (1963) #188",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/15355",
                          "name": "Fantastic Four Annual (1963) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/15356",
                          "name": "Divide and Conquer",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/16111",
                          "name": "Cover #16111",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/16117",
                          "name": "Heart of Darkness !",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/16119",
                          "name": "By The Hand of Mephisto !",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/16125",
                          "name": "By Demons Deluged !",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22323",
                          "name": "Endgame Part 3: Lunar Opposition",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22325",
                          "name": "Finale",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22333",
                          "name": "Cutting the Mustard",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 6,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009385/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                          "name": "Acts of Vengeance!"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/334",
                          "name": "Inhumans Vs. X-Men"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                          "name": "Secret Empire"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                          "name": "Secret Invasion"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/294",
                          "name": "The Thanos Imperative"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/276",
                          "name": "War of Kings"
                      }
                  ],
                  "returned": 6
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/1122/karnak?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Karnak?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009385/karnak?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  }
              ]
          },
          {
              "id": 1010752,
              "name": "Karolina Dean ",
              "description": "",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/50/4c00377435871",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010752",
              "comics": {
                  "available": 9,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010752/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1678",
                          "name": "Runaways (2005) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65095",
                          "name": "Runaways (2017) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24173",
                          "name": "Runaways (2008) #10"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4429",
                          "name": "Runaways (2005) #18"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15826",
                          "name": "Runaways (2005) #27"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/66858",
                          "name": "Runaways by Rainbow Rowell Vol. 1: Find Your Way Home (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/66859",
                          "name": "Runaways Vol. 10: Rock Zombies (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2425",
                          "name": "Runaways Vol. 4: True Believers (Digest)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/66321",
                          "name": "Runaways Vol. 9: Dead Wrong (Trade Paperback)"
                      }
                  ],
                  "returned": 9
              },
              "series": {
                  "available": 7,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010752/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/5338",
                          "name": "Runaways (2008 - 2009)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23461",
                          "name": "Runaways (2017 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/843",
                          "name": "Runaways (2005 - 2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/25712",
                          "name": "Runaways by Rainbow Rowell Vol. 1: Find Your Way Home (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24187",
                          "name": "Runaways Vol. 10: Rock Zombies (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1445",
                          "name": "Runaways Vol. 4: True Believers (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24030",
                          "name": "Runaways Vol. 9: Dead Wrong (2018)"
                      }
                  ],
                  "returned": 7
              },
              "stories": {
                  "available": 8,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010752/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4352",
                          "name": "1 of 6 - In with the New",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4383",
                          "name": "5 of 5 - Parental Guidance",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/32319",
                          "name": "Dead End Kids 3 of 6",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/53571",
                          "name": "Interior #53571",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/141282",
                          "name": "cover from Runaways (2017) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/143785",
                          "name": "cover from RUNAWAYS VOL. 9: DEAD WRONG TPB (2018) #9",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/144871",
                          "name": "cover from RUNAWAYS BY RAINBOW ROWELL VOL. 1: FIND YOUR WAY HOME TPB (2018) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/144873",
                          "name": "cover from RUNAWAYS VOL. 10: ROCK ZOMBIES TPB (2018) #10",
                          "type": "cover"
                      }
                  ],
                  "returned": 8
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010752/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2818/karolina_dean_?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Lucy_In_The_Sky?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010752/karolina_dean_?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  }
              ]
          },
          {
              "id": 1010783,
              "name": "Kat Farrell",
              "description": "",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010783",
              "comics": {
                  "available": 6,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010783/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15855",
                          "name": "Mighty Avengers (2007) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21802",
                          "name": "Mighty Avengers Vol. 1: The Ultron Initiative (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3123",
                          "name": "New Avengers (2004) #14"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3348",
                          "name": "New Avengers (2004) #15"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5033",
                          "name": "New Avengers Vol. 3: Secrets & Lies (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/64558",
                          "name": "Spider-Man: The Daily Bugle (Trade Paperback)"
                      }
                  ],
                  "returned": 6
              },
              "series": {
                  "available": 5,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010783/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1866",
                          "name": "Mighty Avengers (2007 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/5381",
                          "name": "Mighty Avengers Vol. 1: The Ultron Initiative (2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/753",
                          "name": "New Avengers (2004 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1446",
                          "name": "New Avengers Vol. 3: Secrets & Lies (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23521",
                          "name": "Spider-Man: The Daily Bugle (2017)"
                      }
                  ],
                  "returned": 5
              },
              "stories": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010783/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/3477",
                          "name": "1 of 2 - Spider-Woman",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/3479",
                          "name": "2 of 2 - Spider-Woman",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/32378",
                          "name": "4 of 6 - Ultron; THE INITIATIVE BANNER",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/140127",
                          "name": "cover from SPIDER-MAN: THE DAILY BUGLE TPB (2017) #1",
                          "type": "cover"
                      }
                  ],
                  "returned": 4
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010783/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
                          "name": "Initiative"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2827/kat_farrell?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010783/kat_farrell?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  }
              ]
          },
          {
              "id": 1010810,
              "name": "Kate Bishop",
              "description": "",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/4c0035f5b8c95",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010810",
              "comics": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010810/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61277",
                          "name": "Hawkeye (2016) #2"
                      }
                  ],
                  "returned": 1
              },
              "series": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010810/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22533",
                          "name": "Hawkeye (2016 - 2018)"
                      }
                  ],
                  "returned": 1
              },
              "stories": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010810/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/132958",
                          "name": "cover from Hawkeye (2016) #2",
                          "type": "cover"
                      }
                  ],
                  "returned": 1
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010810/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2834/kate_bishop?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Hawkeye_%28Kate_Bishop%29?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010810/kate_bishop?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                  }
              ]
          }
      ]
  }

  dummyComic = {
      "results": [
          {
            "id": 22506,
            "digitalId": 10949,
            "title": "Avengers: The Initiative (2007) #19",
            "issueNumber": 19,
            "variantDescription": "",
            "description": "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program. Will the Kill Krew Army win the day?",
            "modified": "2015-10-27T16:38:23-0400",
            "isbn": "",
            "upc": "5960606084-01911",
            "diamondCode": "SEP082362",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
              {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program. Will the Kill Krew Army win the day?"
              },
              {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "SECRET INVASION Tie-In!\r<br>\"V-S DAY\"\r<br>It's been leading to this since the Hank Pym Skrull first came up with the idea for a Fifty State Initiative.  This is the final assault in the Secret Invasion, a nation-wide plan that will test the limits of 3-D MAN'S superhuman militia, THE KILL KREW ARMY! Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program.  Win or lose, there's no turning back.  After today, everything changes.\r<br>Rated T+ ...$2.99\r<br>"
              }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/22506/avengers_the_initiative_2007_19?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Avengers-The-Initiative-19/digital-comic/10949?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10949&utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/10949?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-12-17T00:00:00-0500"
              },
              {
                "type": "focDate",
                "date": "2008-11-27T00:00:00-0500"
              },
              {
                "type": "unlimitedDate",
                "date": "2010-02-23T00:00:00-0500"
              },
              {
                "type": "digitalPurchaseDate",
                "date": "2011-08-09T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              },
              {
                "type": "digitalPurchasePrice",
                "price": 1.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 9,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1400",
                  "name": "Bong Dazo",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/12581",
                  "name": "Chris Eliopolous",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                  "name": "Chris Eliopoulos",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
                  "name": "Jay David Ramos",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/500",
                  "name": "Chris Sotomayor",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8584",
                  "name": "Harvey Tolibao",
                  "role": "inker"
                }
              ],
              "returned": 9
            },
            "characters": {
              "available": 8,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
                  "name": "Ant-Man (Eric O'Grady)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009284",
                  "name": "Dum Dum Dugan"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010821",
                  "name": "Hardball"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009376",
                  "name": "Jocasta"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
                  "name": "Komodo (Melati Kusuma)"
                }
              ],
              "returned": 8
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49888",
                  "name": "AVENGERS: THE INITIATIVE (2007) #19",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49889",
                  "name": "Avengers: The Initiative (2007) #19 - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22506/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                  "name": "Secret Invasion"
                }
              ],
              "returned": 1
            }
          },
          {
            "id": 22300,
            "digitalId": 0,
            "title": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)",
            "issueNumber": 18,
            "variantDescription": "ZOMBIE VARIANT",
            "description": "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>",
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960606084-01821",
            "diamondCode": "AUG082378",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
              {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>"
              }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/22300/avengers_the_initiative_2007_18_zombie_variant/zombie_variant?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
                "name": "Avengers: The Initiative (2007) #18"
              }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-10-29T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "2008-10-09T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996",
                "extension": "jpg"
              },
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/20/4bb63aa561aa0",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 8,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1054",
                  "name": "Juan Doe",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
                  "name": "Andrew Hennessy",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4981",
                  "name": "Steve Kurth",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                  "name": "Matt Milla",
                  "role": "colorist"
                }
              ],
              "returned": 8
            },
            "characters": {
              "available": 9,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
                  "name": "Ant-Man (Eric O'Grady)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
                  "name": "Cloud 9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009284",
                  "name": "Dum Dum Dugan"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
                  "name": "Gravity"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
                  "name": "Komodo (Melati Kusuma)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
                  "name": "Skrulls"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011057",
                  "name": "Slapstick"
                }
              ],
              "returned": 9
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49105",
                  "name": "Avengers: The Initiative (2007) #18, Zombie Variant",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49106",
                  "name": "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22300/events",
              "items": [],
              "returned": 0
            }
          },
          {
            "id": 22299,
            "digitalId": 10948,
            "title": "Avengers: The Initiative (2007) #18",
            "issueNumber": 18,
            "variantDescription": "",
            "description": "Now that the Kill Krew knows Skrullowjacket's master plan, can they stop the true mission of the Fifty State Initiative? Plus, Thor Girl vs. Ultra Girl! One is more than she appears to be and the other's a Skrull!",
            "modified": "2014-08-05T14:09:33-0400",
            "isbn": "",
            "upc": "5960606084-01811",
            "diamondCode": "AUG082377",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
              {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Now that the Kill Krew knows Skrullowjacket's master plan, can they stop the true mission of the Fifty State Initiative? Plus, Thor Girl vs. Ultra Girl! One is more than she appears to be and the other's a Skrull!"
              },
              {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99"
              }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/22299/avengers_the_initiative_2007_18?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Avengers-The-Initiative-18/digital-comic/10948?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10948&utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/10948?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
                "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
              }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-10-29T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "2008-10-09T00:00:00-0400"
              },
              {
                "type": "unlimitedDate",
                "date": "2010-02-09T00:00:00-0500"
              },
              {
                "type": "digitalPurchaseDate",
                "date": "2011-08-09T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              },
              {
                "type": "digitalPurchasePrice",
                "price": 1.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/58dd057d304d1",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/58dd057d304d1",
                "extension": "jpg"
              },
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb6d098d144a",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 7,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/548",
                  "name": "Andrew Hennessy",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4981",
                  "name": "Steve Kurth",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1405",
                  "name": "Matt Milla",
                  "role": "colorist"
                }
              ],
              "returned": 7
            },
            "characters": {
              "available": 12,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
                  "name": "Ant-Man (Eric O'Grady)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010823",
                  "name": "Cloud 9"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009284",
                  "name": "Dum Dum Dugan"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010702",
                  "name": "Gravity"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010821",
                  "name": "Hardball"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009376",
                  "name": "Jocasta"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
                  "name": "Komodo (Melati Kusuma)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
                  "name": "Skrulls"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010820",
                  "name": "Thor Girl"
                }
              ],
              "returned": 12
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49103",
                  "name": "AVENGERS: THE INITIATIVE (2007) #18",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/49104",
                  "name": "Avengers: The Initiative (2007) #18 - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/22299/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                  "name": "Secret Invasion"
                }
              ],
              "returned": 1
            }
          },
          {
            "id": 21975,
            "digitalId": 10721,
            "title": "Avengers: The Initiative (2007) #17",
            "issueNumber": 17,
            "variantDescription": "",
            "description": "Join Mutant Zero, Trauma, Bengal, Constrictor, and Ant-Man as they undertake this war's most dangerous mission: to take out the Skrull Spider-Woman! Plus, a new Avenger and more clues as to Mutant Zero's identity!",
            "modified": "2014-08-05T14:09:31-0400",
            "isbn": "",
            "upc": "5960606084-01711",
            "diamondCode": "JUL082310",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
              {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "Join Mutant Zero, Trauma, Bengal, Constrictor, and Ant-Man as they undertake this war's most dangerous mission: to take out the Skrull Spider-Woman! Plus, a new Avenger and more clues as to Mutant Zero's identity!"
              },
              {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "SECRET INVASION TIE-IN\r<br>NEW CLUES TO MUTANT ZERO'S IDENTITY AND AN AVENGER RETURNS!\r<br>Camp Hammond has been overrun, not just by the occupying Skrull army, but by the SKRULL QUEEN, herself!  Well guess what?  That's just what the SHADOW INITIATIVE wanted!  Join MUTANT ZERO, TRAUMA, BENGAL, CONSTRICTOR, and ANT-MAN as they try this war's most dangerous mission: to take out the SKRULL-SPIDER-WOMAN!  That IS why you stayed behind, right ANT-MAN? Also: As 3-D MAN and the KILL KREW carve a green, bloody swath across America, their numbers continue to grow.  And in this issue, a classic AVENGER signs up-- and joins the AVENGERS: INITIATIVE ongoing cast!\r<br>Rated T+ ...$2.99\r<br>"
              }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/21975/avengers_the_initiative_2007_17?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Avengers-The-Initiative-17/digital-comic/10721?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10721&utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/10721?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-09-24T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "2008-09-04T00:00:00-0400"
              },
              {
                "type": "unlimitedDate",
                "date": "2008-10-29T00:00:00-0400"
              },
              {
                "type": "digitalPurchaseDate",
                "date": "2011-08-09T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              },
              {
                "type": "digitalPurchasePrice",
                "price": 1.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/58dd03dc2ec00",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/58dd03dc2ec00",
                "extension": "jpg"
              },
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4bb676b26c606",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 6,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
                  "name": "Jay David Ramos",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8584",
                  "name": "Harvey Tolibao",
                  "role": "inker"
                }
              ],
              "returned": 6
            },
            "characters": {
              "available": 12,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
                  "name": "Ant-Man (Eric O'Grady)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010829",
                  "name": "Bengal"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009245",
                  "name": "Constrictor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009376",
                  "name": "Jocasta"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
                  "name": "Komodo (Melati Kusuma)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                  "name": "Nick Fury"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
                  "name": "Skrulls"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009608",
                  "name": "Spider-Woman (Jessica Drew)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
                  "name": "Trauma"
                }
              ],
              "returned": 12
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/48361",
                  "name": "AVENGERS: THE INITIATIVE (2007) #17",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/48362",
                  "name": "Avengers: The Initiative (2007) #17 - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21975/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                  "name": "Secret Invasion"
                }
              ],
              "returned": 1
            }
          },
          {
            "id": 21741,
            "digitalId": 10718,
            "title": "Avengers: The Initiative (2007) #16",
            "issueNumber": 16,
            "variantDescription": "",
            "description": "The Skrull Kill Krew is back! And they're ready to kill, maim, torture, and butcher every mother lovin' Skrull out there! Also, back at Camp Hammond, Ant-Man is in a giant world of trouble.",
            "modified": "2014-08-05T14:09:28-0400",
            "isbn": "",
            "upc": "5960606084-01611",
            "diamondCode": "JUN082352",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
              {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The Skrull Kill Krew is back! And they're ready to kill, maim, torture, and butcher every mother lovin' Skrull out there! Also, back at Camp Hammond, Ant-Man is in a giant world of trouble."
              },
              {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "SECRET INVASION TIE-IN\r<br>For months you've heard one question over and over again: \"Who do you trust?\"  Well we've got your answer right here, Earth-boy: TRUST THE KILL KREW! Yeah, that's right, the SKRULL KILL KREW are back!  And they're ready to kill, maim, torture, and butcher every mother lovin' Skrull out there! Also, back at Camp Hammond, ANT-MAN is in a giant world of trouble-the biggest kind of trouble the SECRET INVASION can dish out.\r<br>Rated T+ ...$2.99\r<br>"
              }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/21741/avengers_the_initiative_2007_16?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Avengers-The-Initiative-16/digital-comic/10718?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10718&utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/10718?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-08-27T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "2008-08-07T00:00:00-0400"
              },
              {
                "type": "unlimitedDate",
                "date": "2009-07-07T00:00:00-0400"
              },
              {
                "type": "digitalPurchaseDate",
                "date": "2011-08-09T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              },
              {
                "type": "digitalPurchasePrice",
                "price": 1.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/58dd01dbc6e51",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/58dd01dbc6e51",
                "extension": "jpg"
              },
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/80/4c361ae117d12",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 6,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
                  "name": "Stefano Caselli",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8949",
                  "name": "Luca Malisan",
                  "role": "colorist"
                }
              ],
              "returned": 6
            },
            "characters": {
              "available": 9,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009180",
                  "name": "Beta-Ray Bill"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009538",
                  "name": "Iron Patriot (James Rhodes)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010818",
                  "name": "Komodo (Melati Kusuma)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                  "name": "Nick Fury"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
                  "name": "Thing"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
                  "name": "Trauma"
                }
              ],
              "returned": 9
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47792",
                  "name": "AVENGERS: THE INITIATIVE (2007) #16",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47793",
                  "name": "Avengers: The Initiative (2007) #16 - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21741/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                  "name": "Secret Invasion"
                }
              ],
              "returned": 1
            }
          },
          {
            "id": 21546,
            "digitalId": 10716,
            "title": "Avengers: The Initiative (2007) #15",
            "issueNumber": 15,
            "variantDescription": "",
            "description": "It's up to the Initiative to face off against the first major Skrull strike force! And on the battle field, the cadet with the biggest secret has to choose which side he's really on. Plus, a new low for Ant-Man and a new danger for War Machine!",
            "modified": "2014-08-05T14:09:27-0400",
            "isbn": "",
            "upc": "5960606084-01511",
            "diamondCode": "MAY082306",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
              {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "It's up to the Initiative to face off against the first major Skrull strike force! And on the battle field, the cadet with the biggest secret has to choose which side he's really on. Plus, a new low for Ant-Man and a new danger for War Machine!"
              },
              {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "SECRET INVASION TIE-IN!\r<br>\"The Only Good Skrull...\"\r<br>With the NEW AVENGERS and the MIGHTY AVENGERS trapped in the Savage Land, it's up to the AVENGERS INITIATIVE to face off against the first major strike of the Skrull Invasion!  There, on the field of battle, the cadet with the biggest secret has to choose how red (or green) his blood really is.  Heroes will fall.  Heroes will die.  And one shall rise. All THIS and:  A new cowardly low for ANT-MAN!  A new danger for WAR MACHINE!  And 3-D MAN gains a \"killer\" new \"krew\"!\r<br>Rated T+ ...$2.99\r<br>"
              }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/21546/avengers_the_initiative_2007_15?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Avengers-The-Initiative-15/digital-comic/10716?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10716&utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/10716?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-07-23T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "2008-07-03T00:00:00-0400"
              },
              {
                "type": "unlimitedDate",
                "date": "2009-06-02T00:00:00-0400"
              },
              {
                "type": "digitalPurchaseDate",
                "date": "2011-08-09T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              },
              {
                "type": "digitalPurchasePrice",
                "price": 1.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/58dbda827bec8",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/58dbda827bec8",
                "extension": "jpg"
              },
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/4bb79730b65d5",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 8,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/694",
                  "name": "Mark Brooks",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8706",
                  "name": "Jay David Ramos",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/627",
                  "name": "Christina Strain",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/8584",
                  "name": "Harvey Tolibao",
                  "role": "penciller"
                }
              ],
              "returned": 8
            },
            "characters": {
              "available": 6,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009316",
                  "name": "Gauntlet (Joseph Green)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009538",
                  "name": "Iron Patriot (James Rhodes)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
                  "name": "Skrulls"
                }
              ],
              "returned": 6
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47498",
                  "name": "AVENGERS: THE INITIATIVE (2007) #15",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47499",
                  "name": "Avengers: The Initiative (2007) #15 - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21546/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                  "name": "Secret Invasion"
                }
              ],
              "returned": 1
            }
          },
          {
            "id": 21366,
            "digitalId": 10715,
            "title": "Avengers: The Initiative (2007) #14",
            "issueNumber": 14,
            "variantDescription": "",
            "description": "The fates of The Initiative, the United States, and Planet Earth hang in the balance. Plus: Former Avenger, Delroy Garret, assumes the mantle and arsenal of Earth's greatest Skrull-Hunter, The 3-D Man.",
            "modified": "2014-08-05T14:09:26-0400",
            "isbn": "",
            "upc": "5960606084-01411",
            "diamondCode": "APR082297",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [
              {
                "type": "issue_preview_text",
                "language": "en-us",
                "text": "The fates of The Initiative, the United States, and Planet Earth hang in the balance. Plus: Former Avenger, Delroy Garret, assumes the mantle and arsenal of Earth's greatest Skrull-Hunter, The 3-D Man."
              },
              {
                "type": "issue_solicit_text",
                "language": "en-us",
                "text": "SECRET INVASION TIE-IN\r<br>\"We Have Met the Enemy and He Is Us!\"\r<br>During the INFILTRATION, a Skrull at the heart of the Camp Hammond said these words: \"It won't be long until we have a Skrull in every state! \"Now that Skrull stands revealed and the fate of The Initiative, the United States, and Planet Earth hang in the balance. Plus:  Former Avenger, Delroy Garret, assumes the mantle and arsenal of Earth's greatest Skrull-Hunter, THE 3-D MAN.  He's here to chew bubblegum and kick some Skrull-@$$.  And he's all out of bubblegum.\r<br>Rated T+ ...$2.99 \r<br>"
              }
            ],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/21366/avengers_the_initiative_2007_14?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Avengers-The-Initiative-14/digital-comic/10715?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=10715&utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/10715?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
                "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
              }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-06-25T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "2008-06-05T00:00:00-0400"
              },
              {
                "type": "unlimitedDate",
                "date": "2009-02-10T00:00:00-0500"
              },
              {
                "type": "digitalPurchaseDate",
                "date": "2011-08-09T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              },
              {
                "type": "digitalPurchasePrice",
                "price": 1.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/58dbce634ea70",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/58dbce634ea70",
                "extension": "jpg"
              },
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/4bb7c84053318",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 6,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
                  "name": "Stefano Caselli",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1134",
                  "name": "Daniele Rudoni",
                  "role": "colorist"
                }
              ],
              "returned": 6
            },
            "characters": {
              "available": 8,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
                  "name": "Ant-Man (Eric O'Grady)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
                  "name": "Avengers"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
                  "name": "Skrulls"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009639",
                  "name": "Super-Skrull"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009670",
                  "name": "Tigra (Greer Nelson)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
                  "name": "Trauma"
                }
              ],
              "returned": 8
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47184",
                  "name": "AVENGERS: THE INITIATIVE (2007) #14",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/47185",
                  "name": "Avengers: The Initiative (2007) #14 - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/21366/events",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                  "name": "Secret Invasion"
                }
              ],
              "returned": 1
            }
          },
          {
            "id": 24571,
            "digitalId": 0,
            "title": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)",
            "issueNumber": 14,
            "variantDescription": "SPOTLIGHT VARIANT",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "5960606084-01421",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 32,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/24571/avengers_the_initiative_2007_14_spotlight_variant/spotlight_variant?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            "variants": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
                "name": "Avengers: The Initiative (2007) #14"
              }
            ],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2008-06-25T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "2008-06-05T00:00:00-0400"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 2.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4e948fb5e9b52",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/4e948fb5e9b52",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 7,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                  "name": "Tom Brevoort",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/694",
                  "name": "Mark Brooks",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                  "name": "Joe Caramagna",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1133",
                  "name": "Stefano Caselli",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                  "name": "Christos Gage",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/626",
                  "name": "Dan Slott",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1134",
                  "name": "Daniele Rudoni",
                  "role": "colorist"
                }
              ],
              "returned": 7
            },
            "characters": {
              "available": 7,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010802",
                  "name": "Ant-Man (Eric O'Grady)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009599",
                  "name": "Skrulls"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009639",
                  "name": "Super-Skrull"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009670",
                  "name": "Tigra (Greer Nelson)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010822",
                  "name": "Trauma"
                }
              ],
              "returned": 7
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/54370",
                  "name": "Avengers: The Initiative (2007) #14, Spotlight Variant",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
                  "name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/24571/events",
              "items": [],
              "returned": 0
            }
          },
          {
            "id": 8500,
            "digitalId": 23291,
            "title": "Deadpool (1997) #44",
            "issueNumber": 44,
            "variantDescription": "",
            "description": null,
            "modified": "2013-06-05T11:24:31-0400",
            "isbn": "",
            "upc": "",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8500",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/8500/deadpool_1997_44?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "purchase",
                "url": "http://comicstore.marvel.com/Deadpool-44/digital-comic/23291?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "reader",
                "url": "http://marvel.com/digitalcomics/view.htm?iid=23291&utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              },
              {
                "type": "inAppLink",
                "url": "https://applink.marvel.com/issue/23291?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
              "name": "Deadpool (1997 - 2002)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "2000-09-01T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
              },
              {
                "type": "unlimitedDate",
                "date": "2012-07-25T00:00:00-0400"
              },
              {
                "type": "digitalPurchaseDate",
                "date": "2013-01-29T00:00:00-0500"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 0
              },
              {
                "type": "digitalPurchasePrice",
                "price": 1.99
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/80/4f206cc0ac28a",
              "extension": "jpg"
            },
            "images": [
              {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/80/4f206cc0ac28a",
                "extension": "jpg"
              }
            ],
            "creators": {
              "available": 5,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/4135",
                  "name": "Shannon Blanchard",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5268",
                  "name": "Jim Calafiore",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/452",
                  "name": "Chris Eliopoulos",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/235",
                  "name": "Jon Holdredge",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/110",
                  "name": "Christopher Priest",
                  "role": "writer"
                }
              ],
              "returned": 5
            },
            "characters": {
              "available": 8,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009245",
                  "name": "Constrictor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                  "name": "Deadpool"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011072",
                  "name": "Edwin Jarvis"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
                  "name": "Hank Pym"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
                  "name": "Iron Man"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009583",
                  "name": "She-Hulk (Jennifer Walters)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010669",
                  "name": "Titania"
                }
              ],
              "returned": 8
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/66410",
                  "name": "Deadpool (1997) #44",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/96303",
                  "name": "Deadpool (1997) #44",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/8500/events",
              "items": [],
              "returned": 0
            }
          },
          {
            "id": 10225,
            "digitalId": 0,
            "title": "Marvel Premiere (1972) #37",
            "issueNumber": 37,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/10225/marvel_premiere_1972_37?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
              "name": "Marvel Premiere (1972 - 1981)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "1977-08-10T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 0
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
              "extension": "jpg"
            },
            "images": [],
            "creators": {
              "available": 10,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1220",
                  "name": "Jim Craig",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1778",
                  "name": "Dan Crespi",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1759",
                  "name": "Joe Rosen",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/385",
                  "name": "Don Glut",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2909",
                  "name": "Roy Thomas",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1178",
                  "name": "Archie Goodwin",
                  "role": "editor"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5412",
                  "name": "David Hunt",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1240",
                  "name": "Joe Sinnott",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/148",
                  "name": "Gil Kane",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1777",
                  "name": "Don Warfield",
                  "role": "colorist"
                }
              ],
              "returned": 10
            },
            "characters": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                }
              ],
              "returned": 1
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19951",
                  "name": "Cover #19951",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19952",
                  "name": "Code-Name:  The Cold Warrior!",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10225/events",
              "items": [],
              "returned": 0
            }
          },
          {
            "id": 10224,
            "digitalId": 0,
            "title": "Marvel Premiere (1972) #36",
            "issueNumber": 36,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 0,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/10224/marvel_premiere_1972_36?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
              "name": "Marvel Premiere (1972 - 1981)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "1977-06-10T00:00:00-0400"
              },
              {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 0
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
              "extension": "jpg"
            },
            "images": [],
            "creators": {
              "available": 9,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10224/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1220",
                  "name": "Jim Craig",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/385",
                  "name": "Don Glut",
                  "role": "writer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5412",
                  "name": "David Hunt",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1240",
                  "name": "Joe Sinnott",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/148",
                  "name": "Gil Kane",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1759",
                  "name": "Joe Rosen",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1754",
                  "name": "Gaspar Saladino",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2053",
                  "name": "George Roussos",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2909",
                  "name": "Roy Thomas",
                  "role": "editor"
                }
              ],
              "returned": 9
            },
            "characters": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10224/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                }
              ],
              "returned": 1
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10224/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
                  "name": "Cover #19949",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19950",
                  "name": "The Devil's Music!",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10224/events",
              "items": [],
              "returned": 0
            }
          },
          {
            "id": 10223,
            "digitalId": 0,
            "title": "Marvel Premiere (1972) #35",
            "issueNumber": 35,
            "variantDescription": "",
            "description": null,
            "modified": "-0001-11-30T00:00:00-0500",
            "isbn": "",
            "upc": "",
            "diamondCode": "",
            "ean": "",
            "issn": "",
            "format": "Comic",
            "pageCount": 36,
            "textObjects": [],
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
            "urls": [
              {
                "type": "detail",
                "url": "http://marvel.com/comics/issue/10223/marvel_premiere_1972_35?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
              }
            ],
            "series": {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
              "name": "Marvel Premiere (1972 - 1981)"
            },
            "variants": [],
            "collections": [],
            "collectedIssues": [],
            "dates": [
              {
                "type": "onsaleDate",
                "date": "1977-04-10T00:00:00-0500"
              },
              {
                "type": "focDate",
                "date": "-0001-11-30T00:00:00-0500"
              }
            ],
            "prices": [
              {
                "type": "printPrice",
                "price": 0.3
              }
            ],
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
              "extension": "jpg"
            },
            "images": [],
            "creators": {
              "available": 8,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10223/creators",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1746",
                  "name": "John Costanza",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1754",
                  "name": "Gaspar Saladino",
                  "role": "letterer"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1220",
                  "name": "Jim Craig",
                  "role": "penciller"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/1519",
                  "name": "Frank Giacoia",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/5412",
                  "name": "David Hunt",
                  "role": "inker"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
                  "name": "Jack Kirby",
                  "role": "penciller (cover)"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2053",
                  "name": "George Roussos",
                  "role": "colorist"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/creators/2909",
                  "name": "Roy Thomas",
                  "role": "editor"
                }
              ],
              "returned": 8
            },
            "characters": {
              "available": 1,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10223/characters",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
                  "name": "3-D Man"
                }
              ],
              "returned": 1
            },
            "stories": {
              "available": 2,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10223/stories",
              "items": [
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
                  "name": "Cover #19947",
                  "type": "cover"
                },
                {
                  "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
                  "name": "The 3-D Man!",
                  "type": "interiorStory"
                }
              ],
              "returned": 2
            },
            "events": {
              "available": 0,
              "collectionURI": "http://gateway.marvel.com/v1/public/comics/10223/events",
              "items": [],
              "returned": 0
            }
          }
        ]
  }
}