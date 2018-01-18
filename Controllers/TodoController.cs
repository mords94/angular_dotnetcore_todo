using Microsoft.AspNetCore.Mvc;
using System.Linq;
using teszAngular.Model;

namespace tesz_angular.Controllers
{
    [Produces("application/json")]
    [Route("api/Todo")]
    public class TodoController : Controller
    {
        ApplicationContext Context = new ApplicationContext();

        [HttpGet]
        public IActionResult Index()
        {
            var Todos = Context.Todos.ToList();
            
            return Json(Todos);
        }

        [HttpGet("{id}")]
        public IActionResult Show(int id)
        {
            var todo = Context.Todos.FirstOrDefault(t => t.ID == id);

            return Json(todo);
        }


        [HttpPost]
        public IActionResult Store([FromBody]Todo model)
        {
            Context.Todos.Add(model);

            Context.SaveChanges();

            Response.StatusCode = 201;
            return Json(model);
        }

        [HttpPatch("{id}")]
        public IActionResult Update(int id, [FromBody]Todo model)
        {
            var todo = Context.Todos.FirstOrDefault(t => t.ID == id);

            if (todo == null)
            {
                return NotFound();
            }

            todo.Finished = model.Finished;

            Context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{ID}")]
        public IActionResult Delete(int id)
        {
            var todo = Context.Todos.FirstOrDefault(t => t.ID == id);

            if (todo == null)
            {
                return NotFound();
            }

            Context.Todos.Remove(todo);

            Context.SaveChanges();

            return NoContent();
        }
    }
}