using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MarvelMoviesAPI.Controllers.Objects;
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
        public List<Movie> GetMovies()
        {
            var movies = context.MarvelMovies.Include(v => v.Villain).Include(h => h.Hero).ToList();
            return movies;
        }
    }
}