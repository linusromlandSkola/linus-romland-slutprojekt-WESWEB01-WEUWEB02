using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace fileupload.Controllers
{
    [ApiController]
    [Route("/")]
    public class IndexController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
             Console.WriteLine(Request.Form.Files);
           return Content("Tjosan NET");
        }
    }
}
