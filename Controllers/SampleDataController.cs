using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using SIM.ERP.Commons;
using SIM.ERP.Models;

namespace SIM.ERP.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        static Random rng = new Random();
        private static List<Employee> lstEmployees = new List<Employee>(Enumerable.Range(1, 5).Select(index => new Employee
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

        [HttpPost("GetListPaging")]
        public IEnumerable<Employee> GetListEmployee([FromBody]PagingParam objPagingParam)
        {
            int NumRow = 200;
            List<Employee> lst = new List<Employee>(Enumerable.Range(1, NumRow).Select(index => new Employee
            {
                ID = rng.Next(1, 1000).ToString(),
                firstname = "Tam",
                lastname = "Ngo Minh",
                Email = "minhtam0412@gmail.com",
                Gender = rng.Next(1, 1000) % 2 + 1
            }));

            foreach (var employee in lst)
            {
                employee.TotalRow = lst.Count;
            }
            return lst;
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
        public IActionResult GetEmployee([FromRoute] string id)
        {
            var employee = lstEmployees.FirstOrDefault(x => x.ID.Equals(id));

            if (employee == null || string.IsNullOrEmpty(employee.ID))
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
                objEmpTmp.Issingle = objEmployee.Issingle;
                objEmpTmp.Birthday = objEmployee.Birthday;
                objEmpTmp.Graduation = objEmployee.Graduation;
                objEmpTmp.Job = objEmployee.Job;
                objEmpTmp.citydata = objEmployee.citydata;
            }
            return await Task.FromResult<IActionResult>(Ok());
        }

        [HttpGet("[action]")]
        public JsonResult PagingEmployee([FromHeader]string sortOrder)
        {
            string strFilter = Globals.GetHeaderValue(Request, "filter");
            string strSortOrder = Globals.GetHeaderValue(Request, "sortOrder");
            string strPageNumber = Globals.GetHeaderValue(Request, "pageNumber");
            string strPageSize = Globals.GetHeaderValue(Request, "pageSize");

            lstEmployees.ForEach(x => x.TotalRow = lstEmployees.Count);
            var rsl = lstEmployees.Skip(Convert.ToInt32(strPageSize) * Convert.ToInt32(strPageNumber))
                .Take(Convert.ToInt32(strPageSize));

            return new JsonResult(rsl);
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


