using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vendor.Entities 
{
    public class Item
    {
        public string ItemDescription { get; set; }
        public double ItemPrice { get; set; }
        public Item() { }
        public Item(string itemDescription, double itemPrice)
        {
            ItemDescription = itemDescription;
            ItemPrice = itemPrice;
        }
    }
}
