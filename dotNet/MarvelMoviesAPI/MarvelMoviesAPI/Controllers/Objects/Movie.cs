using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public float IMDBScore { get; set; }
        public Hero Hero { get; set; }
        public Villain Villain { get; set; }
        public int ReleaseYear { get; set; }
        public string Director { get; set; } 
    }
}
