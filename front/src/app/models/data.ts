import { Title } from "@angular/platform-browser";

export const DATA = {
    home: {
        titre: "Je suis Auguste MANOU",
        role: "Développeur web Fullstack Freelance",
        punchline: "Vous aimeriez booster la rentabilité de votre entreprise ?",
        punchlineShort: "Déléguez les actions répétitives à des applications !",
        detailsPunchline: ["Automatisez des tâches répétitives.", "Mettez en place des applications qui travaillent et vendent quand vous dormez", "Scalez sans multiplier l'équipe", "Recevez des alertes en temps réel", "Calculez vos KPIs automatiquement", "Sécurisez et centralisez vos données pour gagner la confiance et faciliter la prise de décision."],
        conseilsLiberteEtGain: [
            "Libérez-vous des tâches manuelles : une règle automatisée = des heures gagnées chaque semaine.",
            "Transformez une idée en revenu passif : une app bien pensée continue de rapporter.",
            "Travaillez de n'importe où : vos services restent disponibles 24/7 pour vos clients.",
            "Itérez rapidement : prototyper vite, apprendre vite, gagner des parts de marché.",
            "Scalez sans multiplier l'équipe : la bonne architecture permet une croissance maîtrisée.",
            "Réduisez les coûts opérationnels en remplaçant les processus lourds par des flux automatisés.",
            "Offrez une expérience client constante et professionnelle, même hors heures d'ouverture.",
            "Sécurisez et centralisez vos données pour gagner la confiance et faciliter la prise de décision.",
            "Standardisez les processus avec des APIs : réutilisation et intégration simplifiées.",
            "Concentrez vos ressources sur l'innovation, pas sur la répétition."
        ]
    },
    about: {
        titre: "J'aide les entreprises à propulser leur croissance grâce à des applications puissantes et sur-mesure.",
        description: "Passionné par la création d'applications innovantes, j'aime donner vie aux idées à travers des applications innovantes. J'aime également prendre le temps d'écouter mes clients afin de proposer une solution qui répond efficacement au besoin. Voir la différence avant/après la mise en place d'une solution me motive énormément.",
        details: ".",
        technos: ".Net, Angular, Vue.js, React.js, Node.js, Python, Sql Server, MongoDB, Azure",
    },
    portfolio: {
        titre: "Quelques projets récents",
        description: "Découvrez mes projets récents et mes réalisations.",
        projects: [
            {
                title: "Application de génération de recettes culinaires",
                slug: "generateur-recettes-culinaires",
                excerpt: "Application web qui génère des recettes personnalisées en fonction des ingrédients disponibles.",
                description: "Application web qui génère des recettes personnalisées en fonction des ingrédients disponibles. Utilisation de l'IA pour proposer des idées de plats innovants.",
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                images: [
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg',
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg'
                ],
                tags: ["Angular", "FastApi", "IA", "ChatGPT", "Python", "API"],
                url: null
            },
            {
                title: "Site web de l'INFPP",
                slug: "site-infpp",
                excerpt: "Site web institutionnel pour l'Institut National de Formation Professionnelle et de Promotion (INFPP) au Togo.",
                description: "Disponible sur infpp.tg, ce site web institutionnel présente les formations, les actualités et les événements de l'Institut National de Formation Professionnelle et de Promotion.",
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                images: [
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg',
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg'
                ],
                tags: ["HTML", "CSS", "JavaScript", "Laravel", "Bootstrap"],
                url: "https://infpp.tg/"
            },
            {
                title: "Refonte du site web de Cap Domicil Assistance",
                slug: "refonte-site-cap-domicil-assistance",
                excerpt: "Refonte complète du site web pour Cap Domicil Assistance, une entreprise de services à la personne.",
                description: "Site web responsive et moderne pour une entreprise de services à la personne.",
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                images: [
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg',
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg'
                ],
                url: "http://capdomicilassistance.tincom.biz/"
            },
            {
                title: "Application de gestion de quiz par sms - Catch Your Bourse",
                slug: "application-quiz-sms",
                excerpt: "Jeu de quiz interactif via SMS pour des événements en direct.",
                description: "Catch Your Bourse est une Plate forme permettant aux utilisateurs de participer à des quiz en envoyant des SMS. Les gagnants bénificient d'une bourse d'étude. Elle est constituée d'une partie Web pour gérer les quiz et afficher les résultats. Et une autre qui se connecte à un serveur SMS pour envoyer et recevoir les messages.",
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                images: [
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg',
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg'
                ],
                tags: ["Kannel", "Javascript", "Google Cloud", "MysQL"]
            },
            {
                title: "Application Mobile de commande de repas dans un restaurant",
                slug: "application-commande-repas-restaurant",
                excerpt: "Application mobile permettant aux clients de commander des repas dans un restaurant.",
                description: "Application mobile Android permettant aux clients de parcourir le menu, passer des commandes. L'application est sur des tablettes fournies aux clients dans le restaurant. Ce qui permet de réduire le temps d'attente et d'améliorer l'expérience client.",
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                images: [
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg',
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg'
                ],
                tags: ["Javascript", "Symfony", "Socket.io", "Android studio", "Java", "MySql", "SQLite"],
            },
            {
                title: "Application Web de gestion de génération de factures",
                slug: "application-gestion-factures",
                excerpt: "Application web pour gérer la génération et le suivi des factures d'une entreprise.",
                description: "Application web permettant de créer, gérer et suivre les factures. Elle inclut des fonctionnalités telles que la génération automatique de factures. Cela permet aux entreprises de gagner du temps et d'améliorer la précision de leur facturation.",
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                images: [
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg',
                    'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg'
                ],
                url: "http://factour.tincom.biz/",
                tags: ["Javascript", "JQuery", "Symfony", "MySql"],
            },
        ]
    },
    services: {
        Title: "Mes services",
        description: "Je propose une gamme de services pour répondre à vos besoins.",
        services: [
            {
                name: "Développement web",
                icon: "bi bi-browser-edge",
                slug: "developement-web",
                description: "Création d'applications web sur-mesure.",
                details: [
                    "Développement d'applications web sur-mesure.",
                    "Création de sites web responsives et performants.",
                    "Intégration de solutions CMS pour une gestion simplifiée."
                ],
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                tags: ["Développement", "Web"]
            },
            {
                name: "Consultation, Refonte / optimisation",
                icon: "bi bi-globe2",
                slug: "developement-web2",
                description: "Modernisation de projets existants et amélioration des performances.",
                details: [
                    "Audit de vos projets existants.",
                    "Refonte et optimisation pour une meilleure performance.",
                    "Conseils sur les meilleures pratiques de développement."
                ],
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                tags: ["Consultation", "Refonte"]
            },
            {
                name: "Mise en ligne de site web et automatisation des tâches",
                icon: "bi bi-database-fill-check",
                slug: "developement-web3",
                description: "Déploiement et automatisation de vos processus.",
                details: [
                    "Mise en ligne de vos applications web.",
                    "Automatisation des tâches répétitives.",
                    "Intégration de solutions CI/CD pour un déploiement continu."
                ],
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                tags: ["Mise en ligne", "Automatisation"]
            }
        ]
    }
};