using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;

namespace fileupload.Controllers
{
    [ApiController]
    [Route("/")]
    public class IndexController : ControllerBase
    {
        [HttpPost]
        public ActionResult Post()
        {
            Request.Form.Files[0].CopyTo(new FileStream("../uploads/" + Request.Form.Files[0].FileName, FileMode.Create));
            return Content(Request.Form.Files[0].FileName);
        }
    }
}
