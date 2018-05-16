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
    public class HeroController : Controller
    {
        private readonly MCUContext context;
        public HeroController(MCUContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public List<Hero> GetCharacters()
        {
            var heroes = context.Heroes.Include(m => m.FeaturedMovies).ToList();
            //var vilains = context.Villains.Include(m => m.FeaturedMovie).ToList();
            
            return heroes;
        }
        [HttpPut]
        public IActionResult UpdateHero([FromBody] Hero updateHero)
        {
            var orgHero = context.Heroes.Find(updateHero.Id);
            if (orgHero == null)
                return NotFound();

            orgHero.Name = updateHero.Name;
            orgHero.HeroName = updateHero.HeroName;
            orgHero.Actor = updateHero.Actor;
            context.SaveChanges();
            return Ok(orgHero);
        }
    }
}