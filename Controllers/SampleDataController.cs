using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SIM.ERP.Models;

namespace SIM.ERP.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        static Random rng = new Random();
        private static List<Employee> lstEmployees = new List<Employee>(Enumerable.Range(1, 10).Select(index => new Employee
        {
            ID = rng.Next(1, 1000).ToString(),
            firstname = "Tam",
            lastname = "Ngo Minh",
            Email = "minhtam0412@gmail.com",
            Gender = rng.Next(1, 1000) % 2 + 1
        }));
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 100).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }
        [HttpGet("[action]")]
        public IEnumerable<Employee> GetListEmployee()
        {
            return lstEmployees;
        }

        [HttpPost("[action]")]
        public IActionResult AddEmployee([FromBody]Employee employee)
        {
            if (employee != null)
            {
                employee.ID = lstEmployees.Max(x => x.ID) + 1;
                lstEmployees.Add(employee);
                return CreatedAtAction("GetEmployee", new { id = employee.ID }, employee);
            }

            return BadRequest();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employee = new Employee { ID = "1", firstname = "Tam", lastname = "Ngo Minh", Email = "admin@gmail.com", Gender = 1 };

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> DeleteEmployee(string id)
        {
            var objEmp = lstEmployees.FirstOrDefault(x => x.ID.Equals(id));
            if (objEmp != null && !string.IsNullOrEmpty(objEmp.ID))
            {
                lstEmployees.Remove(objEmp);
                return await Task.FromResult<IActionResult>(Ok(objEmp));
            }
            return await Task.FromResult<IActionResult>(Ok(objEmp));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] string id, [FromBody] Employee objEmployee)
        {
            if (!string.Equals(id, objEmployee.ID))
                return BadRequest();
            var objEmpTmp = lstEmployees.FirstOrDefault(x => x.ID.Equals(id));
            if (objEmpTmp != null)
            {
                objEmpTmp.firstname = objEmployee.firstname;
                objEmpTmp.lastname = objEmployee.lastname;
                objEmpTmp.Email = objEmployee.Email;
                objEmpTmp.Gender = objEmployee.Gender;
            }
            return await Task.FromResult<IActionResult>(Ok());
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}


