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

    imageUrl : string;
    character : Result;


    constructor(private _svc : CharacterService){
        this.character = this.dummyCharacter
        this.characters = this.dummyCharacters.results
        //this.maxAmount = this.dummyCharacters.count
        this.character.comics.items
    }

    ngOnInit(){
        this._svc.getCharacterUnknown(this.CharName,this.sortByCommand,this.setLimit,this.offset)
              .subscribe(result => this.characters = result.data.results);
        //setInterval(this.Update , 10000);
        setInterval(this.UpdateImage , 1000);
    }

    Update = () =>
    {
        this._svc.getCharacterUnknown(this.CharName,this.sortByCommand,this.setLimit,this.offset)
            .subscribe(result => {this.maxAmount = result.data.total; this.characters = result.data.results});
        if(this.character != null){
            console.log(this.character.thumbnail.path +'.'+ this.character.thumbnail.extension);
            this.imageUrl = this.character.thumbnail.path +'.'+ this.character.thumbnail.extension;
        }
    console.log(this.character)
    }
    UpdateImage = () =>
    {
        if(this.character != null){
            console.log(this.character.thumbnail.path +'.'+ this.character.thumbnail.extension);
            this.imageUrl = this.character.thumbnail.path +'.'+ this.character.thumbnail.extension;
        }
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

    btnClick(){
        if(this.sortBy == "A-Z"){
            this.sortBy = "Z-A"
            this.sortByCommand = "-name"
        }
        else if(this.sortBy == "Z-A"){
            this.sortBy = "A-Z"
            this.sortByCommand = "name"
        }
        this.Update();
    }

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
    pressChar(id){
        this._svc.findCharacterById(id).subscribe(result => this.character = result.data.results[0]);
        console.log("you presse me")
        console.log(id)
        this.imageUrl = this.character.thumbnail.path +'.'+ this.character.thumbnail.extension;

    }
    
    dummyCharacter: Result =
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
}
