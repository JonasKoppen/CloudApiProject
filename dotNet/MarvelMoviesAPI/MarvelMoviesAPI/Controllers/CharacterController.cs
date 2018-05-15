using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MarvelMoviesAPI.Controllers.Objects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MarvelMoviesAPI.Controllers
{
    [Route("api/v1/character")]
    public class CharacterController : Controller
    {
        private readonly MCUContext context;
        public CharacterController(MCUContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public List<Hero> GetCharacters()
        {
            var heroes = context.Heroes.Include(m => m.FeaturedMovies).ToList();
            var vilains = context.Villains.Include(m => m.FeaturedMovie).ToList();
            var chars = new List<Character>();
            
            return heroes;
        }
    }
}