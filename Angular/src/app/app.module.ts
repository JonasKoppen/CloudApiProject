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
import { WelcomeComponent } from './comicScreen/welcome/welcome.component';
import { CharacterListComponent } from './comicScreen/charList/characterList.component';
import { MovieComponent } from './MovieScreen/movie/movie.component';
import { CharProfileModule } from './comicScreen/charProfile-module/charProfile.component';
import { HomeComponent } from './welcomeScreen/home/home.component';
import { IntroComponent } from './introScreen/Intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,

    CharProfileModule,
    HomeComponent,
    WelcomeComponent,
    CharacterListComponent,

    MovieComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component : HomeComponent},
      {path: "list", component : CharacterListComponent},
      {path: "movie", component : MovieComponent},
      {path: "", redirectTo:"home", pathMatch: 'full'},
      {path: "404", component: PageNotFoundComponent},
      {path : "**", redirectTo: "404"}
    ], {useHash:true}),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    CharacterService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
