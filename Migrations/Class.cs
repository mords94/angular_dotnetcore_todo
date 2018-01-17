using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using teszAngular.Model;

namespace teszAngular.Migrations
{
    public class DbInitializer
    {
        public static void Initialize(ApplicationContext context)//SchoolContext is EF context
        {

            context.Database.EnsureCreated();

            if (context.Todos.Any())
            {
                return;
            }

            var todos = new List<Todo>();

            for (int i = 0; i < 10; i++)
            {
                todos.Add(new Todo()
                {
                    Name = "Name" + i
                });
            }

            context.Todos.AddRange(todos.ToArray());

            context.SaveChanges();

        }
    }
}
