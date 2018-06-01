import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CharacterService } from './services/marvel.characters.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { RouterModule } from '@angular/router';
import { MoviesService } from './services/movie.service';

import { CharacterListComponent } from './comicCharScreen/charList/characterList.component';
import { CharProfileModule } from './comicCharScreen/charProfile-module/charProfile.component';

import { HomeComponent } from './welcomeScreen/home/home.component';

import { MovieComponent } from './MovieScreen/movie/movie.component';
import { IntroComponent } from './introScreen/Intro/intro.component';

import { IntroComponent } from './introScreen/Intro/intro.component';

import { AddMovieComponent } from './addMCUScreen/addMovie/addMovie.component';
import { AddHeroComponent } from './addMCUScreen/addHero/addHero.component';
import { AddScreenComponent } from './addMCUScreen/addScreen/addScreen.component';
import { AddVillainComponent } from './addMCUScreen/addVillain/addVillain.component';
import { ComicBookComponent } from './comicBookScreen/comicBook/comicBook.component';
import { ComicService } from './services/marvel.comics.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,

    CharProfileModule,

    ComicBookComponent,

    IntroComponent,
    HomeComponent,
    CharacterListComponent,

    MovieComponent,

    AddMovieComponent,
    AddHeroComponent,
    AddScreenComponent,
    AddVillainComponent,

    IntroComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "intro", component : IntroComponent},
      {path: "home", component : HomeComponent},
      {path: "list", component : CharacterListComponent},
      {path: "movie", component : MovieComponent},
      {path: "addMovie", component : AddScreenComponent},
      { path: 'comic/:id', component: ComicBookComponent},
      {path: "", redirectTo:"home", pathMatch: 'full'},
      {path: "404", component: PageNotFoundComponent},
      {path : "**", redirectTo: "404"}
    ], {useHash:true}),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    CharacterService,
    MoviesService,
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
