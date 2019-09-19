using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIM.ERP.Models
{
    [Serializable]
    public class PagingParam
    {
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
    }
}
