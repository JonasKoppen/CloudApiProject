import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { TestModule } from './test-module/test.module';
import { CharacterService } from './services/marvel.characters.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from './charList/characterList.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesService } from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,

    TestModule,
    HomeComponent,
    WelcomeComponent,
    CharacterListComponent,

    MovieComponent
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
