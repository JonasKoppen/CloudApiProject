import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { MoviesService, RootMovie, Movie, Hero, Villain  } from '../../services/movie.service';


@Component({
selector: 'app-add',
templateUrl: './addScreen.component.html',
styleUrls: ['./addScreen.component.scss']
}) 
export class AddScreenComponent {
}
