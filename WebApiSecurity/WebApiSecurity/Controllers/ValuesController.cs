using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApiSecurity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Public()
        {
            return new string[] { "Webiste gemaakt door Karen Veraa & Tibo Depovere" };
        }

        [HttpGet]
        [Route("private")]
        [Authorize]
        public ActionResult<IEnumerable<string>> Private()
        {
            return new string[] { "Karen Veraa & Tibo Depovere" };
        }

        [HttpGet]
        [Route("private-scoped")]
        [Authorize("read:names")]
        public ActionResult<IEnumerable<string>> Scoped()
        {
            return new string[] { "Karen Veraa & Tibo Depovere" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}