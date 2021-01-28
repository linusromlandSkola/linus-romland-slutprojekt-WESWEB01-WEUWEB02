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
        [HttpPost]
        public ActionResult Post()
        {
            return Content(Request.Form.Files[0].FileName);
        }
    }
}
