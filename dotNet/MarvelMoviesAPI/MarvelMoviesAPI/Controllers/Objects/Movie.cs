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
        public int IMDBScore { get; set; }
        //public List<Hero> Heroes { get; set; }
        public int ReleaseYear { get; set; }
        public string productionCompany { get; set; }
    }
}
