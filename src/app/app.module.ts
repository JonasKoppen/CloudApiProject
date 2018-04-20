import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { TestModule } from './test-module/test.module';
import { CharacterService } from './services/marvel.characters.service';


@NgModule({
  declarations: [
    AppComponent,
    TestModule
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
