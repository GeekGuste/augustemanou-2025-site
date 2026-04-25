import { Title } from "@angular/platform-browser";

export const DATA = {
    home: {
        titre: "Auguste MANOU",
        role: "Je développe des applications web sur-mesure pour accélérer votre croissance.",
        punchline: "Vos équipes perdent du temps sur des tâches qui pourraient être automatisées ?",
        punchlineShort: "Reprenez ce temps grâce à des applications conçues sur-mesure pour votre entreprise.",
        detailsPunchline: ["Une application calquée sur votre processus exact, pas l'inverse.", "Vos tâches répétitives automatisées : vos équipes se concentrent sur ce qui rapporte.", "Un site ou une app disponible 24h/24 pour vos clients, même quand vous dormez.", "Scalez votre activité sans multiplier votre équipe.", "Vos données centralisées pour décider vite et bien.", "Un prestataire impliqué dans vos résultats, pas seulement dans le code."],
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
        titre: "Votre entreprise mérite des outils conçus pour elle, pas des solutions génériques.",
        description: "Chaque entreprise a ses propres processus, ses propres contraintes, ses propres objectifs. C'est pourquoi je développe des applications web adaptées à votre fonctionnement exact, pour que vos équipes gagnent du temps, que vos clients vivent une meilleure expérience, et que votre activité puisse grandir sans friction.",
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
                excerpt: "Réduit le temps passé à planifier les repas grâce à une IA qui génère des recettes à partir des ingrédients disponibles, zéro gaspillage, zéro prise de tête.",
                description: "Une application web qui génère des recettes personnalisées en fonction des ingrédients disponibles. L'intégration d'une IA (ChatGPT) propose des suggestions créatives en quelques secondes. Résultat : moins de gaspillage alimentaire et une expérience utilisateur fluide.",
                image: "/assets/projects/nesso/nesso1.png",
                images: [
                    '/assets/projects/nesso/nesso1.png',
                    '/assets/projects/nesso/nesso2.png',
                    '/assets/projects/nesso/nesso3.png',
                    '/assets/projects/nesso/nesso4.png'
                ],
                tags: ["Angular", "FastApi", "IA", "ChatGPT", "Python", "API"],
                url: null
            },
            {
                title: "Refonte du site web de Cap Domicil Assistance",
                slug: "refonte-site-cap-domicil-assistance",
                excerpt: "Une nouvelle image en ligne qui inspire confiance et convertit mieux les visiteurs en clients.",
                description: "Refonte complète du site web de Cap Domicil Assistance, une entreprise de services à la personne. Résultat : une présence en ligne professionnelle, un site responsive accessible sur mobile, et une image de marque cohérente qui rassure les prospects dès leur première visite.",
                image: "/assets/projects/capdomicil/capdomicil1.png",
                images: [
                    '/assets/projects/capdomicil/capdomicil1.png',
                    '/assets/projects/capdomicil/capdomicil2.png',
                    '/assets/projects/capdomicil/capdomicil3.png',
                    '/assets/projects/capdomicil/capdomicil4.png'
                ],
                url: "http://capdomicilassistance.tincom.biz/"
            },
            {
                title: "Application de gestion de quiz par sms - Catch Your Bourse",
                slug: "application-quiz-sms",
                excerpt: "Une plateforme qui transforme un quiz SMS en expérience engageante, des centaines de participants, depuis n'importe quel téléphone, sans app à installer.",
                description: "Catch Your Bourse permet aux participants de répondre à des quiz par SMS depuis n'importe quel téléphone basique. Les organisateurs gèrent les questions et suivent les résultats en temps réel depuis une interface web. Les gagnants repartent avec une bourse d'étude. Conçu pour fonctionner à grande échelle sans friction technique.",
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
                excerpt: "Réduit le temps d'attente en salle et fluidifie le service, sans recruter de personnel supplémentaire.",
                description: "Des tablettes Android installées en salle permettent aux clients de consulter le menu et passer leurs commandes directement. Le service est fluidifié, l'attente réduite, et l'expérience client nettement améliorée, sans mobiliser davantage de serveurs. Les commandes arrivent en cuisine en temps réel via Socket.io.",
                image: "/assets/projects/resto/resto1.jpg",
                images: [
                    '/assets/projects/resto/resto1.jpg',
                    '/assets/projects/resto/resto1.jpg'
                ],
                tags: ["Javascript", "Symfony", "Socket.io", "Android studio", "Java", "MySql", "SQLite"],
            },
            {
                title: "Site web de l'INFPP",
                slug: "site-infpp",
                excerpt: "Un site institutionnel qui valorise l'image de l'INFPP et facilite l'accès à l'information pour étudiants et partenaires.",
                description: "Disponible sur infpp.tg, ce site présente les formations, actualités et événements de l'Institut National de Formation Professionnelle et de Promotion au Togo. Conçu pour être facilement navigable et accessible depuis n'importe quel appareil, PC, tablette ou mobile.",
                image: "/assets/projects/infpp/infpp1.png",
                images: [
                    '/assets/projects/infpp/infpp1.png'
                ],
                tags: ["HTML", "CSS", "JavaScript", "Laravel", "Bootstrap"],
                url: "https://infpp.tg/"
            },
            {
                title: "Application Web de gestion de génération de factures",
                slug: "application-gestion-factures",
                excerpt: "Divise par 3 le temps consacré à la facturation et élimine les erreurs de saisie manuelle.",
                description: "Une application web qui permet de créer, suivre et gérer les factures en quelques clics. La génération automatique des documents réduit drastiquement le temps de traitement et les erreurs, comparé à Excel ou Word. Pensée pour les équipes comptables et les dirigeants qui veulent garder la main sur leur facturation.",
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
                name: "Application web sur-mesure",
                icon: "bi bi-browser-edge",
                slug: "application-sur-mesure",
                description: "Gagnez un outil qui s'adapte à votre fonctionnement, pas l'inverse.",
                details: [
                    "Votre processus métier traduit en application web efficace.",
                    "Un outil disponible 24h/24 pour vos équipes et vos clients.",
                    "Une interface pensée pour vos utilisateurs, pas pour les développeurs."
                ],
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                tags: ["Application", "Sur-mesure"]
            },
            {
                name: "Refonte et optimisation de votre site",
                icon: "bi bi-globe2",
                slug: "refonte-optimisation",
                description: "Votre site actuel freine peut-être votre croissance sans que vous le sachiez.",
                details: [
                    "Audit de votre site ou application existante.",
                    "Amélioration des performances et de l'expérience utilisateur.",
                    "Résultat : plus de conversions, moins de friction pour vos clients."
                ],
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                tags: ["Refonte", "Optimisation"]
            },
            {
                name: "Automatisation de vos processus",
                icon: "bi bi-database-fill-check",
                slug: "automatisation",
                description: "Libérez votre équipe des tâches répétitives pour qu'elle se concentre sur ce qui rapporte.",
                details: [
                    "Identification des tâches manuelles chronophages dans votre organisation.",
                    "Mise en place de flux automatisés adaptés à votre métier.",
                    "Résultat : des heures récupérées chaque semaine, des erreurs humaines évitées."
                ],
                image: "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
                tags: ["Automatisation", "Productivité"]
            }
        ]
    }
};