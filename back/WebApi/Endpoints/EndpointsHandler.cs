using WebApi.Endpoints.Contact;

namespace WebApi.Endpoints;

public static class EndpointsHandler
{
    public static IEndpointRouteBuilder MapEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapContactEndpoints();

        return app;
    }
}
