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
                var heroes = new Hero[]
                {
                    new Hero()
                        {
                            Name = "Tony Stark",
                            HeroName = "Iron Man",
                            Actor = "Robert Downey Jr."
                            //FeaturedMovies = context.MarvelMovies.Where(m => m.Hero.Name == "Tony Stark").ToList() //hero.id
                        },
                    new Hero()
                        {
                            Name = "Thor Odinson",
                            HeroName = "Thor",
                            Actor = "Chris Hemsworth"
                            //FeaturedMovies = context.MarvelMovies.Where(m => m.Hero.Name == "Tony Stark").ToList() //hero.id
                        }
                };
                foreach (Hero h in heroes)
                {
                    context.Heroes.Add(h);
                }
                
                var villains = new Villain[]
                {
                     new Villain()
                     {
                         Name = "Obadiah Stane",
                         Actor = "Jeff Bridges",
                     },
                    new Villain()
                    {
                        Name = "Ivan Vanko",
                        Actor = "Mickey Rourke",
                    },
                    new Villain()
                    {
                        Name = "Aldrich Killian",
                        Actor = "Guy Pearce",
                    },
                    new Villain()
                    {
                        Name = "Loki Laufeyson",
                        Actor = "Tom Hiddleston",
                    },
                    new Villain()
                    {
                        Name = "Malekith",
                        Actor = "Christopher Eccleston",
                    },
                    new Villain()
                    {
                        Name = "Hela",
                        Actor = "Cate Blanchett",
                    }
                };
                foreach (Villain v in villains)
                {
                    context.Villains.Add(v);
                }

                var mv = new Movie()
                {
                    Title = "Iron Man",
                    ReleaseYear = 2008,
                    Director = "Jon Favreau",
                    IMDBScore = 7.9f,
                    Hero = heroes[0],
                    Villain = villains[0],
                    Phase = 1,
                    TimeLineOrder = 2
                };
                context.MarvelMovies.Add(mv);
                mv = new Movie()
                {
                    Title = "Iron Man 2",
                    ReleaseYear = 2010,
                    Director = "Jon Favreau",
                    IMDBScore = 7.0f,
                    Hero = heroes[0],
                    Villain = villains[1],
                    Phase = 1,
                    TimeLineOrder = 3
                };
                context.MarvelMovies.Add(mv);
                mv = new Movie()
                {
                    Title = "Iron Man 3",
                    ReleaseYear = 2013,
                    Director = "Shane Black",
                    IMDBScore = 7.2f,
                    Hero = heroes[0],
                    Villain = villains[2],
                    Phase = 2,
                    TimeLineOrder = 7
                };
                context.MarvelMovies.Add(mv);
                mv = new Movie()
                {
                    Title = "Thor",
                    ReleaseYear = 2011,
                    Director = "Kenneth Branagh",
                    IMDBScore = 7.0f,
                    Hero = heroes[1],
                    Villain = villains[3],
                    Phase = 1,
                    TimeLineOrder = 5
                };
                mv = new Movie()
                {
                    Title = "Thor: The Dark World",
                    ReleaseYear = 2013,
                    Director = " Alan Taylor ",
                    IMDBScore = 7.0f,
                    Hero = heroes[1],
                    Villain = villains[4],
                    Phase = 2,
                    TimeLineOrder = 8
                };
                context.MarvelMovies.Add(mv);
                mv = new Movie()
                {
                    Title = "Thor: Ragnarok",
                    ReleaseYear = 2017,
                    Director = "Taika Waititi",
                    IMDBScore = 7.9f,
                    Hero = heroes[1],
                    Villain = villains[5],
                    Phase = 3,
                    TimeLineOrder = 17
                };
                context.MarvelMovies.Add(mv);
                context.SaveChanges();
            }
        }
    }
}
