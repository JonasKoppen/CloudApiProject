using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dotnetEx.Controllers.Objecten;

namespace dotnetEx.Controllers
{
    [Route("api/v2/books")]
    public class BooksController2 : Controller
    {
        public BooksController2()
        {

        }

        
        [Route("{id}")]
        [HttpGet]
        public IActionResult BetBook(int id)
        {
            return Content("OK");            
        }


    }
}