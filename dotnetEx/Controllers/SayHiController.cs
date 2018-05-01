using Microsoft.AspNetCore.Mvc;
using dotnetEx.Controllers.Objecten;
    
public class SayHiController : Controller
{
    [Route("hi")]
    // GET api/values
    [HttpGet]
    public IActionResult Hello()
    {
        return Content("Hi!");
    }

    [Route("hiJonas")]
    [HttpGet]
    public IActionResult HelloJonas(){
        var result = Content("hello Jonas !");
        result.StatusCode = 401;
        return result;
    }

    [Route("notFound")]
    [HttpGet]
    public IActionResult NotFoundJonas()
    {
        return NotFound();
    }

    [Route("book")]
    [HttpGet]
    public IActionResult GetBooks()
    {
        var b1 = new Book()
        {
            Title = "Living on Mars in 2043",
            ISBN = "444-223-3552555",
            Pages = 438
        };
        return Json(b1);
    }
}
