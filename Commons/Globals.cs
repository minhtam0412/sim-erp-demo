using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace SIM.ERP.Commons
{
    public static class Globals
    {
        public static string GetHeaderValue(HttpRequest objHttpRequest, string key)
        {
            string strRsl = string.Empty;
            try
            {
                StringValues objStringValues;
                objHttpRequest.Headers.TryGetValue(key, out objStringValues);
                strRsl = objStringValues.FirstOrDefault();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

            return strRsl;
        }
    }
}
