using Domain.Pages;

namespace Repositories;

public class ServiceRepository
{
    public IEnumerable<Service> GetAllServices()
    {
        return new List<Service>
        {
            new Service
            {
                Id = 1,
                Name = "Web Development",
                Slug = "web-development",
                Icon = "bi bi-browser-edge",
                Description = "Création d'applications web sur-mesure.",
                Details = new []
                {
                    "Développement d'applications web sur-mesure.",
                    "Création de sites web responsives et performants.",
                    "Intégration de solutions CMS pour une gestion simplifiée."
                },
                ImageUrl = "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                Tags = new[] { "Développement", "Web" }
            },
            new Service
            {
                Id = 2,
                Name = "Mobile App Development",
                Slug = "mobile-app-development",
                //Details = "Creating mobile applications for iOS and Android.",
                Description = "Our team specializes in developing high-quality mobile applications that provide a seamless user experience.",
                ImageUrl = "https://example.com/images/mobile-app-development.jpg",
                Tags = new[] { "iOS", "Android", "Flutter", "React Native" }
            },
            new Service
            {
                Id = 3,
                Name = "Mobile App Development",
                Slug = "mobile-app-development",
                Details = "Creating mobile applications for iOS and Android.",
                //Description = "Our team specializes in developing high-quality mobile applications that provide a seamless user experience.",
                ImageUrl = "https://example.com/images/mobile-app-development.jpg",
                Tags = new[] { "iOS", "Android", "Flutter", "React Native" }
            }
        };
    }
}
