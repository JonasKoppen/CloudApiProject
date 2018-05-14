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
                    ReleaseYear = 2008,
                    Director = "Jon Favreau",
                    IMDBScore = 7.9f,
                    Hero = context.Heroes.Single(h => h.HeroName == "Tony Stark"),
                    Villain = context.Villains.Single(v => v.Name == "Obadiah Stane")

                };
                context.MarvelMovies.Add(mv);
                mv = new Movie()
                {
                    Title = "Iron Man 2",
                    ReleaseYear = 2010,
                    Director = "Jon Favreau",
                    IMDBScore = 7.0f,
                    Hero = context.Heroes.Single(h => h.HeroName == "Tony Stark"),
                    Villain = context.Villains.Single(v => v.Name == "Ivan Vanko")
                };
                context.MarvelMovies.Add(mv);
                context.SaveChanges();
            }
            if (!context.Heroes.Any())
            {
                var hero = new Hero()
                {
                    Name = "Tony Stark",
                    HeroName = "Iron Man",
                    Actor = "Robert Downey Jr.",
                    
                };
                context.Heroes.Add(hero);
                context.SaveChanges();
            }
            if (!context.Villains.Any())
            {
                var villain = new Villain()
                {
                    Name = "Obadiah Stane",
                    Actor = "Jeff Bridges",

                };
                context.Villains.Add(villain);
                villain = new Villain()
                {
                    Name = "Ivan Vanko",
                    Actor = "Mickey Rourke",

                };
                context.Villains.Add(villain);
                context.SaveChanges();
            }
        }
    }
}
