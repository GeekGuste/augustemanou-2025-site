using Application;
using Application.Contact;
using Infrastructure.Email;
using Infrastructure.Email.Smtp;

namespace WebApi;

public static class WebApiModule
{
    public static IServiceCollection AddAppServices(this IServiceCollection services)
    {
        services.AddScoped<IEmailSenderService, SmtpEmailSenderService>();
        services.AddScoped<SendContactService>();
        services.AddScoped<ILanguageService, LanguageService>();

        return services;
    }
}
