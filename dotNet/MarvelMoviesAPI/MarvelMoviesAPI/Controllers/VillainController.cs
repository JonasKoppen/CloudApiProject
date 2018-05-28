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
    [Route("api/v1/villain")]
    public class VillainController : Controller
    {
        private readonly MCUContext context;
        public VillainController(MCUContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public DataResultVillain GetVillains(string name, string sort, string dir = "asc")
        {
            IQueryable<Villain> query = context.Villains;
            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(h => h.Name == name);
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
                }
            }
            var result = new DataResultVillain()
            {
                Data = query.Include(v => v.FeaturedMovies).ToList()
            };

            return result;
        }

        [Route("{id}")]   // api/v1/heroes/2
        [HttpGet]
        public IActionResult GetVillain(int id)
        {
            var villain = context.Villains.Include(h => h.FeaturedMovies).SingleOrDefault(h => h.Id == id);
            if (villain == null)
                return NotFound();
            /*
            var temp = new DataResultHero()
            {
                Data = (new List<Hero>() { hero })
            };
            */
            return Ok(villain);
        }

        [Route("{id}/movies")]   // api/v1/movies/2
        [HttpGet]
        public IActionResult GetMoviessForVillain(int id)
        {
            var villain = context.Villains
                    .Include(d => d.FeaturedMovies)
                    .SingleOrDefault(d => d.Id == id);

            if (villain == null)
                return NotFound();

            var result = new DataResultMovie()
            {
                Data = villain.FeaturedMovies.ToList()
            };
            return Ok(result);
        }
        

        [HttpPut, Authorize]
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

       
        [HttpPost, Authorize]
        public IActionResult CreateVillain([FromBody] Villain newVillain)
        {
            //villain toevoegen in de databank, Id wordt dan ook toegekend
            context.Villains.Add(newVillain);
            context.SaveChanges();
            // Stuur een result 201 met het boek als content
            return Created("", newVillain);
        }

        [Route("{id}")]
        [HttpDelete, Authorize]
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
    public class DataResultVillain
    {
        public int count { get { return Data.Count(); } }
        public List<Villain> Data { get; set; }
    }
}
