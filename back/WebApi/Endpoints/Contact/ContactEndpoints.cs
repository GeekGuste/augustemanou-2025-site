using Application.Contact;
using Domain.Contact;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Endpoints.Contact;

public static class ContactEndpoints
{
    public static IEndpointRouteBuilder MapContactEndpoints(this IEndpointRouteBuilder routes)
    {
        routes.MapPost("/contact", async ([FromBody] ContactForm form, [FromServices] SendContactService sender) =>
        {
            await sender.Send(form);
            return Results.Ok(new { message = "Message bien reçu !" });
        });

        return routes;
    }
}
