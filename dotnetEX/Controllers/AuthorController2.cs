using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dotnetEx.Controllers.Objecten;

namespace dotnetEx.Controllers
{
    [Route("api/v2/authors")]
    public class AuthorController2 : Controller
    {
        private readonly LibraryContext context;
        public AuthorController2(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Author> GetAuthors()
        {
            return context.Authors.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetAuthor(int id)
        {
            var book = context.Authors.Find(id);
            return Ok(book);       
        }


        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteAuthor(int id)
        {
            var author = context.Authors.Find(id);
            if(author == null)
                return NotFound();
            context.Authors.Remove(author);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateAuthor([FromBody] Author updateAuthor)
        {
            var orgAuthor = context.Authors.Find(updateAuthor.Id);
            if (orgAuthor == null)
                return NotFound();

            orgAuthor.Name = updateAuthor.Name;
            orgAuthor.FirstName = updateAuthor.FirstName;
            context.SaveChanges();
            return Ok(orgAuthor);
        }

    }
}