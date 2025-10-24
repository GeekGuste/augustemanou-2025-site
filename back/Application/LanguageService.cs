using Domain;
using Microsoft.AspNetCore.Http;

namespace Application;

public interface ILanguageService
{
    string GetCurrentLanguage();
}

public class LanguageService : ILanguageService
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public LanguageService(IHttpContextAccessor accessor)
    {
        _httpContextAccessor = accessor;
    }

    public string GetCurrentLanguage()
    {
        var lang = _httpContextAccessor.HttpContext?.Request
            ?.Headers["Accept-Language"].ToString()
            .Split(',', StringSplitOptions.RemoveEmptyEntries)
            .FirstOrDefault() ?? Constants.DefaultLang;

        return lang[..2];
    }
}
