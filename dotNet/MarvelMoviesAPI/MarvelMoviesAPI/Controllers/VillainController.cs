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
        public List<Villain> GetVillaines()
        {
            //var villaines = context.Villaines.ToList();
            //var vilains = context.Villains.Include(m => m.FeaturedMovie).ToList();

            return context.Villains.ToList();
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
        [Route("{id}")]   // api/v1/villaines/2
        [HttpGet]
        public IActionResult GetVillain(int id)
        {
            var Villain = context.Villains.Find(id);
            if (Villain == null)
                return NotFound();

            return Ok(Villain);
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
