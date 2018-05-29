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
    [Route("api/v1/hero")]
    public class HeroController : Controller
    {
        private readonly MCUContext context;
        public HeroController(MCUContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public DataResultHero GetHeroes(string name, string heroName, string sort, string dir = "asc")
        {
            IQueryable<Hero> query = context.Heroes;
            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(h => h.Name == name);
            if (!string.IsNullOrWhiteSpace(heroName))
                query = query.Where(h => h.HeroName == heroName);
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "Name":
                        if (dir == "asc")
                            query = query.OrderBy(h => h.Name);
                        else if (dir == "desc")
                            query = query.OrderByDescending(h => h.Name);
                        break;
                    case "Actor":
                        if (dir == "asc")
                            query = query.OrderBy(h => h.Actor);
                        else if (dir == "desc")
                            query = query.OrderByDescending(h => h.Actor);
                        break;
                    case "HeroName":
                        if (dir == "asc")
                            query = query.OrderBy(h => h.HeroName);
                        else if (dir == "desc")
                            query = query.OrderByDescending(h => h.HeroName);
                        break;
                }
            }
            var result = new DataResultHero()
            {
                Data = query.Include(h => h.FeaturedMovies).ToList()
            };

            return result;
        }

        [Route("{id}")]   // api/v1/heroes/2
        [HttpGet]
        public IActionResult GetHero(int id)
        {
            var hero = context.Heroes.Include(h => h.FeaturedMovies).SingleOrDefault(h => h.Id == id);
            if (hero == null)
                return NotFound();
            /*
            var temp = new DataResultHero()
            {
                Data = (new List<Hero>() { hero })
            };
            */
            return Ok(hero);
        }

        [Route("{id}/movies")]   // api/v1/movies/2
        [HttpGet]
        public IActionResult GetMoviessForHero(int id)
        {
            var hero = context.Heroes
                    .Include(d => d.FeaturedMovies)
                    .SingleOrDefault(d => d.Id == id);

            if (hero == null)
                return NotFound();

            var result = new DataResultMovie()
            {
                Data = hero.FeaturedMovies.ToList()
            };
            return Ok(result);
        }

        [HttpPut, Authorize]
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
        

        

        [HttpPost, Authorize]
        public IActionResult CreateHero([FromBody] Hero newHero)
        {
            //hero toevoegen in de databank, Id wordt dan ook toegekend
            context.Heroes.Add(newHero);
            context.SaveChanges();
            // Stuur een result 201 met het boek als content
            return Created("", newHero);
        }

        [Route("{id}")]
        [HttpDelete, Authorize]
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

    public class DataResultHero
    {
        public int count { get { return Data.Count(); } }
        public List<Hero> Data { get; set; }
    }
}