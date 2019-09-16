using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIM.ERP.Models
{
    public class Employee
    {
        public string ID { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string Email { get; set; }
        public int Gender { get; set; }
        public DateTime Birthday { get; set; }
        public bool Issingle { get; set; }
        public string Graduation { get; set; }
        public int TotalRow { get; set; }
        public string Job { get; set; }
        public string citydata { get; set; }
    }
}
