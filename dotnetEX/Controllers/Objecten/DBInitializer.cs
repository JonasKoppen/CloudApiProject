using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetEx.Controllers.Objecten
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();
            var authors = new Author[] {
                    new Author
                    {
                        name = "Koppen",
                        firstName = "Jonas",
                    },

                    new Author
                    {
                        name = "Janssen",
                        firstName = "Tomas",
                    },

                    new Author
                    {
                        name = "Jamar",
                        firstName = "JoJorennas",
                    }
                };

            if (!context.Authors.Any())
            {
                
                foreach(Author au in authors)
                    context.Authors.Add(au);

                context.SaveChanges();
            }

            if (!context.Books.Any())
            {
                var bk = new Book()
                {
                    Title = "The Hunger Games",
                    ISBN = "046325",
                    Pages = 374,
                    Genre = "Adventure",
                    Author = authors.Single(a => a.name == "Koppen")
                    
                };
                context.Books.Add(bk);
                bk = new Book()
                {
                    Title = "Catching Fire",
                    ISBN = "046326",
                    Pages = 345,
                    Genre = "Adventure",
                    Author = authors.Single(a => a.name == "Koppen")
                };
                context.Books.Add(bk);
                bk = new Book()
                {
                    Title = "Mockingjay",
                    ISBN = "046365",
                    Pages = 401,
                    Genre = "Adventure",
                    Author = authors.Single(a => a.name == "Koppen")
                };
                context.Books.Add(bk);
                context.SaveChanges();
            }
        }
    }
}
