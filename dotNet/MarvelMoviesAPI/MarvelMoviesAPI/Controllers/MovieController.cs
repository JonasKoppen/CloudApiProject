using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MarvelMoviesAPI.Controllers.Objects;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MarvelMoviesAPI.Controllers
{
    [Route("api/v1/movie")]
    public class MovieController : Controller
    {
        private readonly MCUContext context;
        public MovieController(MCUContext context)
        {
            this.context = context;
        }
        
        [HttpGet]
        public DataResultMovie GetMovies(string title, int? phase, string sort, string dir = "asc")
        {
            
            IQueryable<Movie> query = context.MarvelMovies;
            if (!string.IsNullOrWhiteSpace(title))
                query = query.Where(m => m.Title == title);
            if (phase > 0)
                query = query.Where(m => m.Phase == phase);
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "title":
                        if (dir == "asc")
                            query = query.OrderBy(m => m.Title);
                        else if (dir == "desc")
                            query = query.OrderByDescending(m => m.Title);
                        break;
                    case "IMDBScore":
                        if (dir == "asc")
                            query = query.OrderBy(m => m.IMDBScore);
                        else if (dir == "desc")
                            query = query.OrderByDescending(m => m.IMDBScore);
                        break;
                    case "ReleaseYear":
                        if (dir == "asc")
                            query = query.OrderBy(m => m.ReleaseYear);
                        else if (dir == "desc")
                            query = query.OrderByDescending(m => m.ReleaseYear);
                        break;
                    case "Phase":
                        if (dir == "asc")
                            query = query.OrderBy(m => m.Phase);
                        else if (dir == "desc")
                            query = query.OrderByDescending(m => m.Phase);
                        break;
                    case "TimeLineOrder":
                        if (dir == "asc")
                            query = query.OrderBy(m => m.TimeLineOrder);
                        else if (dir == "desc")
                            query = query.OrderByDescending(m => m.TimeLineOrder);
                        break;
                }
            }
            var result = new DataResultMovie()
            {
                Data = query.Include(v => v.Villain).Include(h => h.Hero).ToList()
            };

            return result;
        }

        [Route("{id}")]   // api/v1/heroes/2
        [HttpGet]
        public IActionResult GetMovie(int id)
        {
            var movie = context.MarvelMovies.Include(m => m.Hero).Include(m => m.Villain).SingleOrDefault(m => m.Id == id);
            if (movie == null)
                return NotFound();
            /*
            var temp = new DataResultMovie()
            {
                Data = (new List<Movie>() { movie })
            };
            */
            return Ok(movie);
        }

        [Route("{id}/Hero")]   // api/v1/movies/2
        [HttpGet]
        public IActionResult GetHeroFromMovie(int id)
        {
            var movie = context.MarvelMovies
                    .Include(d => d.Hero)
                    .SingleOrDefault(d => d.Id == id);

            if (movie == null)
                return NotFound();

            var result = new DataResultHero()
            {
                Data = new List<Hero>() { movie.Hero }
            };
            return Ok(result);
        }

        [Route("{id}/Villain")]   // api/v1/movies/2
        [HttpGet]
        public IActionResult GetVillainFromMovie(int id)
        {
            var movie = context.MarvelMovies
                    .Include(d => d.Villain)
                    .SingleOrDefault(d => d.Id == id);

            if (movie == null)
                return NotFound();

            var result = new DataResultVillain()
            {
                Data = new List<Villain>() { movie.Villain }
            };
            return Ok(result);
        }


        [HttpPut, Authorize]
        public IActionResult UpdateMovie([FromBody] Movie updateMovie)
        {
            var orgMovie = context.MarvelMovies.Find(updateMovie.Id);
            if (orgMovie == null)
                return NotFound();

            orgMovie.Title = updateMovie.Title;
            orgMovie.IMDBScore = updateMovie.IMDBScore;
            orgMovie.Hero = updateMovie.Hero;
            orgMovie.Villain = updateMovie.Villain;
            orgMovie.ReleaseYear = updateMovie.ReleaseYear;
            orgMovie.Director= updateMovie.Director;
            context.SaveChanges();
            return Ok(orgMovie);
        }


        [HttpPost, Authorize]
        public IActionResult CreateMovie([FromBody] Movie newMovie)
        {
            if (newMovie == null)
                return BadRequest();
            newMovie.Hero = context.Heroes.SingleOrDefault(d => d.Id == newMovie.Hero.Id);
            newMovie.Villain = context.Villains.SingleOrDefault(d => d.Id == newMovie.Villain.Id);
            //Movie toevoegen in de databank, Id wordt dan ook toegekend
            context.MarvelMovies.Add(newMovie);
            context.SaveChanges();
            // Stuur een result 201 met het boek als content
            return Created("", newMovie);
        }

        [Route("{id}")]
        [HttpDelete, Authorize]
        public IActionResult DeleteMovie(int id)
        {
            var Movie = context.MarvelMovies.Find(id);
            if (Movie == null)
                return NotFound();

            //Movie verwijderen ..
            context.MarvelMovies.Remove(Movie);
            context.SaveChanges();
            //Standaard response 204 bij een gelukte delete
            return NoContent();
        }

    }

    public class DataResultMovie
    {
        public int count { get { return Data.Count(); } }
        public List<Movie> Data { get; set; }
    }


}