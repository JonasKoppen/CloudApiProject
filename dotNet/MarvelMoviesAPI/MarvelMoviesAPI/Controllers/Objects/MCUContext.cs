using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    public class MCUContext : DbContext
    {
        public MCUContext(DbContextOptions<MCUContext> options) : base(options)
        {

        }
        public DbSet<Movie> MarvelMovies { get; set; }

        public DbSet<Hero> Heroes { get; set; }
        public DbSet<Villain> Villains { get; set; }
    }
}
