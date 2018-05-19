using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    public class Hero
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Actor { get; set; }
        public string HeroName { get; set; }
        //public List<String> Alias { get; set; }
        [JsonIgnore]
        public ICollection<Movie> FeaturedMovies { get; set; }

    }
}
