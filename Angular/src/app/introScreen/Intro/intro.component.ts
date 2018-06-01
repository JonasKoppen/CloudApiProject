import { Component } from '@angular/core';
import { debug } from 'util';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { validateConfig } from '@angular/router/src/config';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";



@Component({
selector: 'app-intro',
templateUrl: './intro.component.html',
styleUrls: ['./intro.component.scss']
}) 
export class IntroComponent{
    constructor( private socialAuthService: AuthService ) {}

    public signinWithGoogle () {
        let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      
        this.socialAuthService.signIn(socialPlatformProvider).then(
          (userData) => { //on success
             //this will return user data from google. What you need is a user token which you will send it to the server
             //this.sendToRestApiMethod(userData.idToken);
          }
        );
      }

      /*
      sendToRestApiMethod(token: string) : void {
        this.http.post(“url to google login in your rest api”, { token: token } }
          .subscribe(onSuccess => {
           //login was successful
           //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
         }, onFail => {
            //login was unsuccessful
            //show an error message
         }
       );
     }
     */

}