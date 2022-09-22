using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vendor.Entities
{
    public class PurchaseHistory 
    {
        public DateTime PurchasedDate { get; set; }
        public string ItemPurchased { get; set; }
        public double ItemPrice { get; set; }
        public PurchaseHistory() { }
        public PurchaseHistory(DateTime purchasedDated, string itemPurchased, double itemPrice)
        {
            PurchasedDate = purchasedDated;
            ItemPurchased = itemPurchased;
            ItemPrice = itemPrice;
        }
    }
}
