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
        public List<Movie> GetMovies(string title, int? phase, string sort, string dir = "asc")
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
            return query.Include(v => v.Villain).Include(h => h.Hero).ToList();
        }
   
    }
}