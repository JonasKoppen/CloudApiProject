import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { Comic, ComicService } from '../../services/marvel.comics.service.1';
import { ActivatedRoute } from '@angular/router';


@Component({
selector: 'app-comic-books',
templateUrl: './comicBook.component.html',
styleUrls: ['./comicBook.component.scss']
}) 
export class ComicBookComponent implements OnInit{
    comicId: number
    comic: Comic

    imageUrl : string;

    constructor(private _svc : ComicService, private route: ActivatedRoute){
        this.comicId = this.route.snapshot.params['id']
        this.comic = this.comicDummy.data.results[0]
        
    }

    ngOnInit(){
        //this._svc.getCharacterUnknown(this.CharName,this.sortByCommand,this.setLimit,this.offset)
        //      .subscribe(result => this.characters = result.data.results);
        //setInterval(this.Update , 10000);
        setInterval(this.UpdateImage , 1000);
    }

    Update = () =>
    {
        this._svc.getComicById(this.comicId)
            .subscribe(result => {this.comic = result.comics.comics[0]});
        if(this.comic != null){
            console.log(this.comic.thumbnail.path +'.'+ this.comic.thumbnail.extension);
            this.imageUrl = this.comic.thumbnail.path +'.'+ this.comic.thumbnail.extension;
        }
    }
    UpdateImage = () =>
    {
        if(this.comic != null){
            console.log(this.comic.thumbnail.path +'.'+ this.comic.thumbnail.extension);
            this.imageUrl = this.comic.thumbnail.path +'.'+ this.comic.thumbnail.extension;
        }
    }

    
    
    comicDummy = {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2018 MARVEL",
        "attributionText": "Data provided by Marvel. © 2018 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
        "etag": "d978ec068d4176a951c4142c389d8a3ad8ae951c",
        "data": {
            "offset": 0,
            "limit": 20,
            "total": 41883,
            "count": 20,
            "results": [
                {
                    "id": 60015,
                    "digitalId": 0,
                    "title": "The Amazing Spider-Man (2017) #22 (Lozano Teaser Variant)",
                    "issueNumber": 22,
                    "variantDescription": "Lozano Teaser Variant",
                    "description": null,
                    "modified": "2016-12-16T15:29:02-0500",
                    "isbn": "",
                    "upc": "75960608297102231",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60015",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60015/the_amazing_spider-man_2017_22_lozano_teaser_variant/lozano_teaser_variant?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20432",
                        "name": "The Amazing Spider-Man (2017 - Present)"
                    },
                    "variants": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55320",
                            "name": "The Amazing Spider-Man (2017) #22"
                        }
                    ],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2029-12-31T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-12-07T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                        "extension": "jpg"
                    },
                    "images": [],
                    "creators": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60015/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                                "name": "Nick Lowe",
                                "role": "editor"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12373",
                                "name": "Alexander Lozano",
                                "role": "penciller (cover)"
                            }
                        ],
                        "returned": 2
                    },
                    "characters": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60015/characters",
                        "items": [],
                        "returned": 0
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60015/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/130564",
                                "name": "cover from Amazing Spider-Man (2015) #22 (LOZANO TEASER VARIANT)",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/130565",
                                "name": "story from Amazing Spider-Man (2015) #22 (LOZANO TEASER VARIANT)",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60015/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 16243,
                    "digitalId": 0,
                    "title": "Cap Transport (2005) #4",
                    "issueNumber": 4,
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
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/16243",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/16243/cap_transport_2005_4?utm_campaign=apiRef&utm_source=acdb5b6c98e4a5408e05093f4d0f6de4"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/2722",
                        "name": "Cap Transport (2005 - 2006)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2029-12-31T00:00:00-0500"
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
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/16243/creators",
                        "items": [],
                        "returned": 0
                    },
                    "characters": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/16243/characters",
                        "items": [],
                        "returned": 0
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/16243/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/34014",
                                "name": "",
                                "type": ""
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/67543",
                                "name": "cap transport 4 cover",
                                "type": "cover"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/16243/events",
                        "items": [],
                        "returned": 0
                    }
                }
            ]
        }
    }
}
