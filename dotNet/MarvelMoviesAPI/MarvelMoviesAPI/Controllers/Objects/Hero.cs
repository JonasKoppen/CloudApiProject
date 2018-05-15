using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    public class Hero: Character
    {
        public string HeroName { get; set; }
        //public List<String> Alias { get; set; }

    }
}
