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
        public int Phase { get; set; }
        public int TimeLineOrder { get; set; }
    }
}

/*
 *  Phase One

    1.1 Iron Man (2008), 2
    1.2 The Incredible Hulk (2008), 4
    1.3 Iron Man 2 (2010), 3
    1.4 Thor (2011), 5
    1.5 Captain America: The First Avenger (2011), 1
    1.6 Marvel's The Avengers (2012), 6

2 Phase Two

    2.1 Iron Man 3 (2013), 7
    2.2 Thor: The Dark World (2013), 8
    2.3 Captain America: The Winter Soldier (2014), 9
    2.4 Guardians of the Galaxy (2014), 10
    2.5 Avengers: Age of Ultron (2015), 12
    2.6 Ant-Man (2015), 13

3 Phase Three

    3.1 Captain America: Civil War (2016), 15
    3.2 Doctor Strange (2016), 14
    3.3 Guardians of the Galaxy Vol. 2 (2017), 11
    3.4 Spider-Man: Homecoming (2017), 16
    3.5 Thor: Ragnarok (2017), 17
    3.6 Black Panther (2018), 18
    3.7 Avengers: Infinity War (2018), 19

*/

    /* Timeline
     * 1) Captain America: First AVenget
     * 2) Iron man
     * 3) Iron man 2
     * 4) The Incredible Hulk
     * 5) Thor
     * 6) The Avengers
     * 7) Iron Man 3
     * 8) Thor the dark world
     * 9) Captain America: Winter soldier
     * 10) Guardians of the galaxy 1 & 2
     * 11) Avengers: Age of ultron
     * 12) Ant-Man
     * 13) Doctor Strange
     * 14) Captain America: Civil War
     * 15) Spider-Man: Homecoming
     * 16) Thor: Ragnarok
     * 17) Black Panther
     * 18) Avenger: Infinity War
     * 
     */ 