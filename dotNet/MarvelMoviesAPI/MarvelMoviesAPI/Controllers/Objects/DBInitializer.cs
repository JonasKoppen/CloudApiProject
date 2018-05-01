using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    public class DBInitializer
    {
        public static void Initialize(MCUContext context)
        {
            context.Database.EnsureCreated();

            if (!context.MarvelMovies.Any())
            {
                var mv = new Movie()
                {
                    Title = "Iron Man",
                    ReleaseYear = 2008
                };
                context.MarvelMovies.Add(mv);
                mv = new Movie()
                {
                    Title = "Iron Man 2",
                    ReleaseYear = 2010
                };
                context.MarvelMovies.Add(mv);
                context.SaveChanges();
            }
            if (!context.Heroes.Any())
            {
                var hero = new Hero()
                {
                    HeroName = "Iron Man"
                };
                context.Heroes.Add(hero);
                context.SaveChanges();
            }
        }
    }
}
