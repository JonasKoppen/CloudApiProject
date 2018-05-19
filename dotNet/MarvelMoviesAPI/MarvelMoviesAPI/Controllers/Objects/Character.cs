using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Actor { get; set; }
        [JsonIgnore]
        public List<Movie> FeaturedMovies { get; set; }
    }
}
