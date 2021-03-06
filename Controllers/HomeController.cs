using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using teszAngular.Model;
using Microsoft.AspNetCore.Http;

namespace tesz_angular.Controllers
{
    public class HomeController : Controller
    {
        ApplicationContext Context = new ApplicationContext();
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

    }
}
