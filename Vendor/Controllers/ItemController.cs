using Microsoft.AspNetCore.Mvc;
using System;
using Vendor.DataAccess;
using Vendor.Entities;
using Range = Vendor.Entities.Range;

namespace Vendor.Controllers
{
    [ApiController]
    [Route("item")]
    public class ItemController : Controller
    {
        [HttpGet("/all")]

        public IActionResult GetAllItems()
        {
            return Ok(VendorDataAccess.GetAllItemsAsync());
        }
        /*
        [HttpGet("/read/additional")]

        public async Task<IActionResult> ReadAdditionalItemsAsync()
        {
            await VendorDataAccess.ReadAdditionalItemsAsync().ConfigureAwait(false);
            return Ok();
        }
        */
        [HttpPost("/add")]

        public IActionResult AddAdditionalItems([FromBody] Item item)
        {
            VendorDataAccess.AddAdditionalItemsAsync(item);
            return Ok();
        }

        [HttpPost("/purchase")]

        public IActionResult PurchaseItemAsyc([FromBody] Item item)
        {
            VendorDataAccess.PurchaseItemAsyc(item);
            return Ok();
        }

        [HttpGet("/history")]

        public IActionResult ReadItemHistory()
        {

            return Ok(VendorDataAccess.ReadItemHistoryAsync());
        }


        [HttpPost("from/{from}/to/{to}")]

        public IActionResult GetPurchaseHistoryOfItemInRange([FromBody] Range range, DateTime from, DateTime to)
        {

            return Ok(VendorDataAccess.GetPurchaseHistoryOfItemInRangeAsync(range, from, to));
        }
    }
}
