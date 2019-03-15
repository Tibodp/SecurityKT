using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApiSecurity.Controllers
{
    [Route("api")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [Route("public")]
        [HttpGet]
        public ActionResult<IEnumerable<string>> Public()
        {
            return new string[] { "Webiste gemaakt door Karen Veraa & Tibo Depovere" };
        }
   
        [Route("private")]
        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<string>> Private()
        {
            return new string[] { "Webiste gemaakt door Karen Veraa & Tibo Depovere" };
        }

        [HttpGet]
        [Route("private-scoped")]
        [Authorize("read:names")]
        public ActionResult<IEnumerable<string>> Scoped()
        {
            return new string[] { "Karen Veraa & Tibo Depovere" };
        }
    }
}