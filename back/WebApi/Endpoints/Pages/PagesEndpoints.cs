using Application.Contact;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Endpoints.Pages;

public static class PagesEndpoints
{
    public static IEndpointRouteBuilder MapPagesEndpoints(this IEndpointRouteBuilder routes)
    {
        routes.MapPost("/home", async ([FromServices] SendContactService sender) =>
        {
            //await sender.Send();
            return Results.Ok(new { message = "Message bien reçu !" });
        });

        routes.MapPost("/portfolio", async ([FromServices] SendContactService sender) =>
        {
            //await sender.Send();
            return Results.Ok(new { message = "Message bien reçu !" });
        });

        return routes;
    }
}
