using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    public class Villain : Character
    {

        [JsonIgnore]
        public Movie FeaturedMovie { get; set; }
    }
}
