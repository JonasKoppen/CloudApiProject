# CloudApiProject

By Jonas Koppen,
s099106@ap.be<br />
student AP Hogeschool Anwterp<br />

This repo is a combination of 2 projects in 2 different directory's:<br />
1. /Angular: Angular client (made in Visual Studio Code)<br />
2. /dotNet/MarvelMoviesAPI: DotNet Core 2 Web API (made in Visual Studio 2017)<br />

## API's<br />
First Party API: dotnet core 2 (Marvel Movie API)<br />
Third Party API: Marvel API

## Debug Access<br />
Angular Client: localhost:4200<br />
Client with Server: localhost:3005<br />
Dotnet Core 2 API: localhost:5050<br /><br />

## dotnet API modify access<br />
the dotnet API requires a JSON Web Tokens if you want to do anything but getting some data.
the token must be included in the header of the request and only works for 30 min.
To request a token send a post to localhost:5050/api/token with body
{
  username:"admin",
  password:"student"
}
result = a token that has to by insert in the movie.service.ts var ApiKey=""


