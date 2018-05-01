using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dotnetEx.Controllers.Objecten;

namespace dotnetEx.Controllers
{
    [Route("api/v1/books")]
    public class BookController : Controller
    {
        [HttpGet]
        public List<Book> getBooks()
        {
            var list = new List<Book>();

            list.Add(new Book()
            {
                Id = 0,
                Title = "Living on Mars in 2043",
                ISBN = "444-223-3552555",
                //Author = "John Glass",
                Pages = 438
            });

            list.Add(new Book()
            {
                Id = 1,
                Title = "Death on Mars, A Doom story",
                ISBN = "444-666-3552555",
                //Author = "John Camero",
                Pages = 666
            });

            return list;
        }

        [HttpPost]
        public IActionResult AddBook()
        {
            return Ok();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult getBook(int id)
        {
            if(id > 2)
            {
                return NotFound();
            }
            return Content(new Book()
            {
                Id = id,
                Title = "Living on Mars in 2043",
                ISBN = "444-223-3552555",
                //Author = "John Glass",
                Pages = 438
            }.ToString());
        }

    }
}