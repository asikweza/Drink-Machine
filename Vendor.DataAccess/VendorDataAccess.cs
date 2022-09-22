using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Vendor.Entities;
using Range = Vendor.Entities.Range;

namespace Vendor.DataAccess
{
    public static class VendorDataAccess
    {
        public static string AdditionalItemsFile = "AdditionaFiles.txt"; //You can text file or csv file e.g ItemDescription, ItemPrice
        public static string PurchaseHistoryFile = "PurchaseHistoryFile.txt"; //You can text file or csv file e.g PurchaseDate, ItemDescription, ItemPrice
        public static List<Item> defaultItems = new () { new Item("Sprite", 1.25), new Item("Pepsi", 1.50), new Item("Lemonade", 2.0), new Item("Coke", 1.25), new Item("Water", 1.0), new Item("Root Beer", 1.25) };

        public static List<Item> GetAllItemsAsync()
        {
            return defaultItems;
        }
        public static void ReadAdditionalItemsAsync()
        {
            if (File.Exists(AdditionalItemsFile))
            {
                var extraItems = File.ReadAllLines(AdditionalItemsFile);
                if (extraItems != null && extraItems.Length > 0)
                {
                    foreach (var stringItem in extraItems)
                    {
                        var item = stringItem.Split(",");
                        defaultItems.Add(new Item(item[0], Convert.ToDouble(item[1])));
                    }
                }
            }


        }
        public static void AddAdditionalItemsAsync(Item item)
        {
            if (item == null)
                return;
            var additionalItemsDb = new StreamWriter(AdditionalItemsFile, append: true);
            additionalItemsDb.WriteLine($"{item.ItemDescription.Trim()},{item.ItemPrice}");
            defaultItems.Add(item);
            additionalItemsDb.Close();
        }
        public static void PurchaseItemAsyc(Item item)
        {
            if (item == null)
                return;
            var purchaseHistoryDb = new StreamWriter(PurchaseHistoryFile, append: true);
            purchaseHistoryDb.WriteLine($"{DateTime.UtcNow},{item.ItemDescription.Trim()},{item.ItemPrice}");
            purchaseHistoryDb.Close();

        }
        public static List<PurchaseHistory> ReadItemHistoryAsync()
        {
            var results = new List<PurchaseHistory>();
            if (File.Exists(PurchaseHistoryFile))
            {
                var extraItems = File.ReadAllLines(PurchaseHistoryFile);
                if (extraItems != null && extraItems.Length > 0)
                {
                    foreach (var stringItem in extraItems)
                    {
                        var item = stringItem.Split(",");
                        results.Add(new PurchaseHistory(Convert.ToDateTime(item[0]), item[1].Trim(), Convert.ToDouble(item[2])));
                    }
                }
            }
            return results;
        }
        public static List<PurchaseHistory> GetPurchaseHistoryOfItemInRangeAsync(Range item, DateTime from, DateTime to)
        {
            var purchaseHistoryItems = ReadItemHistoryAsync();
            var results = new List<PurchaseHistory>();
            foreach (var itemHistory in purchaseHistoryItems)
            {
                if (itemHistory.ItemPurchased.Contains(item.ItemDescription))
                {
                    if (itemHistory.PurchasedDate >= from && itemHistory.PurchasedDate <= to)
                    {
                        results.Add(itemHistory);
                    }
                }
            }
            return results;
        }
    }
}
