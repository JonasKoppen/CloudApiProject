using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dotnetEx.Controllers.Objecten;
using Microsoft.EntityFrameworkCore;

namespace dotnetEx.Controllers
{
    [Route("api/v2/books")]
    public class BooksController2 : Controller
    {
        private readonly LibraryContext context;
        public BooksController2(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Book> GetBooks()
        {
            var books = context.Books.Include(d => d.Author);
            return books.ToList();
        }

        public IActionResult GetBooksForAuthor(int id)
        {
           //var author = context.Authors.Include(d => d.books).SingleOrDefault(d => d.Id == id);
            var book = context.Books.Where(d => d.Author.Id == id);
            return Ok(book);
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetBook(int id)
        {
            var book = context.Books.Include(d => d.Author)
                                    .SingleOrDefault(d=> d.Id == id);
            return Ok(book);       
        }


        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteBook(int id)
        {
            var book = context.Books.Find(id);
            if(book == null)
                return NotFound();
            context.Books.Remove(book);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateBook([FromBody] Book updateBook)
        {
            var orgBook = context.Books.Find(updateBook.Id);
            if (orgBook == null)
                return NotFound();
            orgBook.Title = updateBook.Title;
            orgBook.Pages = updateBook.Pages;
            orgBook.ISBN = updateBook.ISBN;
            orgBook.Genre = updateBook.Genre;
            context.SaveChanges();
            return Ok(orgBook);
        }

        [HttpPost]
        public IActionResult CreateBook([FromBody] Book newBook)
        {
            context.Books.Add(newBook);
            context.SaveChanges();
            return Created("", newBook);
        }

    }
}