using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarvelMoviesAPI.Controllers.Objects
{
    interface Character
    {
        int Id { get; set; }
        string Name { get; set; }
    }
}
