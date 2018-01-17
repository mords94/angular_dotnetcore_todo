using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace teszAngular.Model
{
    public class Todo
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }

        public bool Finished { get; set; }
    }
}
