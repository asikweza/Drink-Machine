using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Vendor.DataAccess;

namespace Vendor.Models
{
    public class Program
    {

        public static void Main(string[] args)
        {
            VendorDataAccess.ReadAdditionalItemsAsync();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        
    }
}
