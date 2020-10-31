using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using Azure.Cosmos;
using System.Net;

namespace PortfolioCounter
{
    public static class Portfolio_get_counter
    {

        [FunctionName("Portfolio_get_counter")]
        public static async Task<ActionResult<int>> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "getcounter")] HttpRequest request,
            [CosmosDB(databaseName: "portfolio_db", collectionName: "page_counter",
                ConnectionStringSetting = "CosmosDBConnection", Id = "{Query.id}", PartitionKey = "{Query.page}")] PageItem page,
            ILogger log)
        {

            if (page == null)
            {
                log.LogInformation("Page not found");
            }
            else
            {
                log.LogInformation($"Counter value is {page.Counter}");


                log.LogInformation($"Counter value is {page.Counter} & {page.Id} ");

                var counter = int.Parse(page.Counter) + 1;


                log.LogInformation($"{counter}");

                return new OkObjectResult(counter);
            }




            return new OkObjectResult(-1);
        }


        private static async Task<String> ReplaceItemAsync(CosmosClient cosmosClient, PageItem pageItem)
        {
            CosmosContainer container = cosmosClient.GetContainer("portfolio_db", "page_counter");

            Console.WriteLine($"inside method.... {pageItem.Id}, {pageItem.Counter}");

            ItemResponse<PageItem> readResponse = await container.ReadItemAsync<PageItem>("1", new PartitionKey("home"));

            PageItem result = readResponse;
            Console.WriteLine(result.Counter);


            ItemResponse<PageItem> pageResponse = await container.ReplaceItemAsync<PageItem>(pageItem, pageItem.Id, new PartitionKey("home"));

            return pageItem.Counter;
        }

        [FunctionName("Portfolio_post_counter")]
        public static void Run1(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", "get", "post", Route = "updatecounter")] HttpRequest request,
            [CosmosDB(databaseName: "portfolio_db", collectionName: "page_counter", ConnectionStringSetting = "CosmosDBConnection")] out dynamic document,
            ILogger log
        )
        {

            log.LogInformation($"{request.QueryString}");
            log.LogInformation($"{request.Query["counter"]}");
            var counter = int.Parse(request.Query["counter"]);
            document = new { id = $"{request.Query["id"]}", page = request.Query["page"].ToString(), counter = counter.ToString() };



        }





    }

    public class PageItem
    {

        public string Id { get; set; }


        public string Page { get; set; }

        public string Counter { get; set; }
    }
}
