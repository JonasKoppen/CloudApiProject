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

            if (!context.Books.Any())
            {
                var bk = new Book()
                {
                    Title = "The Hunger Games",
                    ISBN = "046325",
                    Pages = 374,
                    Genre = "Adventure"
                };
                context.Books.Add(bk);
                context.SaveChanges();
            }
        }
    }
}
