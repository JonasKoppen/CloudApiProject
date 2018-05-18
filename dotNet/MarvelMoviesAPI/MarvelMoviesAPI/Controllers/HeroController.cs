using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MarvelMoviesAPI.Controllers.Objects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MarvelMoviesAPI.Controllers
{
    [Route("api/v1/hero")]
    public class HeroController : Controller
    {
        private readonly MCUContext context;
        public HeroController(MCUContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public List<Hero> GetHeroes()
        {
            //var heroes = context.Heroes.ToList();
            //var vilains = context.Villains.Include(m => m.FeaturedMovie).ToList();
            
            return context.Heroes.ToList();
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
        [Route("{id}")]   // api/v1/heroes/2
        [HttpGet]
        public IActionResult GetHero(int id)
        {
            var Hero = context.Heroes.Find(id);
            if (Hero == null)
                return NotFound();

            return Ok(Hero);
        }

        [Route("{id}/movies")]   // api/v1/movies/2
        [HttpGet]
        public IActionResult GetMoviessForHero(int id)
        {
            var Hero = context.Heroes
                    .Include(d => d.FeaturedMovies)
                    .SingleOrDefault(d => d.Id == id);

            if (Hero == null)
                return NotFound();

            return Ok(Hero.FeaturedMovies);
        }

        [HttpPost]
        public IActionResult CreateHero([FromBody] Hero newHero)
        {
            //hero toevoegen in de databank, Id wordt dan ook toegekend
            context.Heroes.Add(newHero);
            context.SaveChanges();
            // Stuur een result 201 met het boek als content
            return Created("", newHero);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteHero(int id)
        {
            var Hero = context.Heroes.Find(id);
            if (Hero == null)
                return NotFound();

            //Hero verwijderen ..
            context.Heroes.Remove(Hero);
            context.SaveChanges();
            //Standaard response 204 bij een gelukte delete
            return NoContent();
        }
    }
}