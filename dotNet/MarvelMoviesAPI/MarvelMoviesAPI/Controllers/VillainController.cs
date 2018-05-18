using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MarvelMoviesAPI.Controllers.Objects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MarvelMoviesAPI.Controllers
{
    [Route("api/v1/villain")]
    public class VillainController : Controller
    {
        private readonly MCUContext context;
        public VillainController(MCUContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public DataResultHero GetHeroes(string name, string heroName, int? phase, string sort, string dir = "asc")
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
            var temp = new DataResultHero()
            {
                Data = (new List<Hero>() { hero })
            };
            return Ok(temp);
        }

        [HttpPut]
        public IActionResult UpdateVillain([FromBody] Villain updateVillain)
        {
            var orgVillain = context.Villains.Find(updateVillain.Id);
            if (orgVillain == null)
                return NotFound();

            orgVillain.Name = updateVillain.Name;
            orgVillain.Actor = updateVillain.Actor;
            context.SaveChanges();
            return Ok(orgVillain);
        }

        [Route("{id}/movies")]   // api/v1/movies/2
        [HttpGet]
        public IActionResult GetMoviessForVillain(int id)
        {
            var Villain = context.Villains
                    .Include(d => d.FeaturedMovies)
                    .SingleOrDefault(d => d.Id == id);

            if (Villain == null)
                return NotFound();

            return Ok(Villain.FeaturedMovies);
        }

        [HttpPost]
        public IActionResult CreateVillain([FromBody] Villain newVillain)
        {
            //villain toevoegen in de databank, Id wordt dan ook toegekend
            context.Villains.Add(newVillain);
            context.SaveChanges();
            // Stuur een result 201 met het boek als content
            return Created("", newVillain);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteVillain(int id)
        {
            var Villain = context.Villains.Find(id);
            if (Villain == null)
                return NotFound();

            //Villain verwijderen ..
            context.Villains.Remove(Villain);
            context.SaveChanges();
            //Standaard response 204 bij een gelukte delete
            return NoContent();
        }
    }
}
