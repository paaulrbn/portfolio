// === INITIALISATION DES ICÔNES TECH ===
function initializeTechIcons() {
    const techIconWrappers = document.querySelectorAll(".tech-icon-wrapper");
    techIconWrappers.forEach((wrapper) => {
        const img = wrapper.querySelector(".tech-icon");
        if (img && img.src) {
            wrapper.style.webkitMaskImage = `url(${img.src})`;
            wrapper.style.maskImage = `url(${img.src})`;
        }
    });
}

// === SYSTÈME D'ANIMATIONS AU SCROLL ===

// Intersection Observer pour les animations
const animationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Une fois l'animation déclenchée, on peut arrêter d'observer cet élément
                animationObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1, // Se déclenche quand 10% de l'élément est visible
        rootMargin: "0px 0px -50px 0px", // Se déclenche 50px avant que l'élément soit complètement visible
    }
);

// Fonction d'initialisation des animations
function initializeAnimations() {
    // Sélectionner tous les éléments avec des classes d'animation
    const animatedElements = document.querySelectorAll(
        [
            ".animate-fade-in",
            ".animate-slide-up",
            ".animate-slide-down",
            ".animate-slide-left",
            ".animate-slide-right",
            ".animate-scale-in",
            ".animate-bounce-in",
        ].join(", ")
    );

    // Observer chaque élément
    animatedElements.forEach((element) => {
        animationObserver.observe(element);
    });

    // Compatibilité avec l'ancien système fade-in (si présent)
    const legacyFadeElements = document.querySelectorAll(
        '.fade-in:not([class*="animate-"])'
    );
    legacyFadeElements.forEach((element) => {
        element.classList.add("animate-fade-in");
        animationObserver.observe(element);
    });
}

// Fonction pour forcer l'affichage d'un élément (utile pour le debug)
function forceShowElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add("visible");
    }
}

// Fonction pour réinitialiser toutes les animations (utile pour le debug)
function resetAllAnimations() {
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach((element) => {
        element.classList.remove("visible");
        animationObserver.observe(element);
    });
}

const cardsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                cardsObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }
);

function initializeCardsVisibility() {
    const cards = document.querySelectorAll(".project-card, .about-card");
    cards.forEach((card) => {
        if (!card.classList.contains("animate-fade-in")) {
            card.classList.add("animate-fade-in");
        }
        cardsObserver.observe(card);
    });
}

// === INITIALISATION GLOBALE ===
document.addEventListener("DOMContentLoaded", function () {
    // Marquer que JavaScript est chargé
    document.body.classList.add("js-loaded");

    // Initialiser les masques SVG pour les icônes tech
    initializeTechIcons();

    // Initialiser le système d'animations
    initializeAnimations();

    // Initialiser la visibilité des cartes
    initializeCardsVisibility();

    // Magnetic hover for links/buttons
    initializeMagneticHover();

    // Les animations du hero se déclenchent automatiquement via CSS
    // Mais on peut les forcer si nécessaire
    setTimeout(() => {
        const heroElements = document.querySelectorAll(
            ".hero-title-animate, .hero-description-animate, .hero-scroll-animate"
        );
        heroElements.forEach((element) => {
            if (!element.classList.contains("visible")) {
                element.classList.add("visible");
            }
        });
    }, 50);

    setTimeout(() => {
        initializeVanillaTilt();
    }, 100);
});

// Navigation smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

// Scroll indicator & Retour en haut
document.addEventListener("DOMContentLoaded", function () {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
        scrollIndicator.addEventListener("click", () => {
            const aboutSection = document.querySelector("#about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    const backToTopLink = document.querySelector('a[href="#top"]');
    if (backToTopLink) {
        backToTopLink.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});

// Données des projets & Modals
const projectsData = {
    classification: {
        title: "Classificateur de Dépêches Journalistiques",
        category: "Algorithmique",
        description:
            "Le projet consiste à développer un programme capable de classifier automatiquement des dépêches journalistiques en les attribuant à l'une des cinq catégories prédéfinies : Environnement-Sciences, Culture, Économie, Politique, et Sports. Le processus repose sur l'utilisation de lexiques spécifiques à chaque catégorie, avec des mots-clés marqués par des poids représentant leur pertinence.",
        competences: [
            "Programmation JAVA",
            "Algorithmique",
            "Analyse de données",
            "Implémentation d'un besoin client",
            "Comparaison d'approches algorithmiques",
        ],
        objectifs: [
            "Créer un programme de classification fiable et rapide",
            "Générer des lexiques spécifiques à chaque catégorie",
            "Attribuer correctement les dépêches à leurs catégories",
            "Obtenir un taux de précision élevé dans la classification",
        ],
        techniques: [
            "Lecture et traitement de fichiers texte en Java",
            "Implémentation de méthodes de calcul de scores",
            "Collaboration efficace en équipe",
            "Implémentation d'un besoin client",
        ],
        technologies: ["Java", "Algorithmique", "Traitement de données"],
        github: "https://github.com/paaulrbn/S1.01-Programme-de-classification-automatique",
    },
    thibou: {
        title: "Thibou - Guide de Musée Intelligent",
        category: "Full-Stack",
        description:
            "Thibou est une application web permettant d'optimiser le parcours des visiteurs dans un musée. Elle aide les utilisateurs à créer des itinéraires personnalisés en fonction de leurs préférences artistiques (mouvements, artistes, types d'œuvres). La plateforme intègre un système de gestion de comptes utilisateurs, un plan interactif du musée et des descriptions détaillées des œuvres exposées.",
        competences: [
            "Développement web full-stack",
            "React & Next.js",
            "TypeScript",
            "Base de données PostgreSQL",
            "Authentification sécurisée",
            "UI/UX avec TailwindCSS",
        ],
        objectifs: [
            "Développer une interface utilisateur intuitive et responsive",
            "Gérer l'authentification et les profils utilisateurs",
            "Visualiser les parcours et les œuvres sur un plan interactif",
            "Assurer la sécurité des données utilisateurs",
        ],
        techniques: [
            "Développement d'API REST avec Next.js",
            "Modélisation de données avec Drizzle ORM",
            "Création de composants React réutilisables",
            "Gestion de la sécurité",
            "Intégration de visualisations interactives",
        ],
        technologies: ["React", "Next.js", "TypeScript", "PostgreSQL"],
        github: "https://github.com/balded1ams/Thibou",
    },
    "carnet-stage": {
        title: "Plateforme de Gestion de Stages",
        category: "Mobile & Web",
        description:
            "Carnet de Stage est une solution complète pour la gestion des stages étudiants, comprenant un back-office administratif et une application mobile. Cette plateforme permet aux étudiants de consulter les offres de stage, de soumettre des candidatures, et de suivre leur progression. Les administrateurs peuvent gérer les offres, suivre les candidatures et communiquer avec les étudiants via une interface web sécurisée.",
        competences: [
            "Développement back-end avec Symfony 5.4",
            "Développement mobile Android (Java)",
            "API REST avec API Platform",
            "Base de données PostgreSQL",
            "Architecture client-serveur",
        ],
        objectifs: [
            "Concevoir une plateforme de gestion complète des stages",
            "Développer une API REST sécurisée pour la communication client-serveur",
            "Créer une application mobile intuitive pour les étudiants",
            "Implémenter une gestion des candidatures et offres de stage",
            "Assurer la sécurité des données utilisateurs",
        ],
        techniques: [
            "Développement d'API REST avec Symfony",
            "Modélisation de données avec Doctrine ORM",
            "Gestion d'authentification",
            "Développement Android avec Java",
            "Communication HTTP client-serveur",
            "Conception d'interfaces utilisateur mobiles",
            "Tests d'API avec Postman",
        ],
        technologies: ["Symfony", "Android", "API REST", "PostgreSQL"],
        github: null,
    },
    "ecole-loustics": {
        title: "École des Loustics - Jeux Éducatifs",
        category: "Mobile",
        description:
            "École des Loustics est une application éducative Android conçue pour aider les enfants à développer leurs compétences en mathématiques et en culture générale de manière ludique. L'application propose différents mini-jeux incluant des exercices d'additions, des tables de multiplication, des questions de culture générale, ainsi qu'un jeu de Chifoumi. Elle permet de créer des profils d'utilisateurs pour suivre les progrès et scores de chaque enfant.",
        competences: [
            "Développement Android natif (Java)",
            "Architecture MVC",
            "Gestion de base de données avec Room",
            "Interface utilisateur adaptée aux enfants",
            "Gestion de données utilisateur",
            "Animation et interaction tactile",
        ],
        objectifs: [
            "Créer une application éducative engageante pour les enfants",
            "Développer plusieurs mini-jeux pédagogiques",
            "Implémenter un système de profils utilisateurs",
            "Intégrer un système de score et de progression",
            "Concevoir une interface simple et intuitive",
            "Offrir une expérience d'apprentissage ludique",
        ],
        techniques: [
            "Développement d'applications Android avec Java",
            "Conception d'interfaces utilisateur avec XML",
            "Gestion de persistance de données avec Room Database",
            "Utilisation des SharedPreferences pour stocker des données utilisateur",
            "Implémentation d'algorithmes de jeux",
            "Navigation entre activités avec Intent",
            "Gestion des résultats d'activité avec ActivityResultLauncher",
        ],
        technologies: ["Android", "Java", "Room Database"],
        github: "https://github.com/paaulrbn/Ecole-des-Loustics",
    },
    esn: {
        title: "Site Web Institutionnel Capgemini",
        category: "Développement Web",
        description:
            "Dans le cadre d'un projet académique, j'ai travaillé sur la conception et la réalisation du site web institutionnel de Capgemini, une entreprise leader dans le secteur du numérique. L'objectif principal était de créer un site pratique et accessible, destiné aux élèves de 3ème en recherche de stage, en leur fournissant des informations compréhensibles sur l'entreprise.",
        competences: [
            "Gestion de projet",
            "Recherche d'information",
            "Conception web",
            "Développement web",
            "Communication",
            "Collaboration en équipe",
        ],
        objectifs: [
            "Créer un site web sobre et écologiquement responsable",
            "Présenter Capgemini de manière claire et accessible",
            "Mettre en valeur la transition numérique et écologique",
            "Vulgariser les informations techniques",
        ],
        techniques: [
            "Outils de conception: whimsical",
            "Gestion de contenu et structuration de l'information",
            "Collaboration en équipe avec répartition des tâches",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Whimsical"],
        github: null,
    },
    titanic: {
        title: "Base de Données du Titanic",
        category: "Base de données",
        description:
            "Ce projet, réalisé en binôme, consiste à analyser le contexte historique et les données relatives au naufrage du Titanic afin de modéliser une base de données. Cette modélisation inclut la création d'un Schéma Entité-Association (SEA) et sa transformation en Schéma Logique de Relations (SLR). Les données sont ensuite implémentées dans une base PostgreSQL et des requêtes sont écrites pour vérifier la conformité des données.",
        competences: [
            "Analyse de données historiques",
            "Modélisation de bases de données (SEA, SLR)",
            "Utilisation de PostgreSQL",
            "Écriture et exécution de requêtes SQL",
            "Validation et test des contraintes",
        ],
        objectifs: [
            "Comprendre et synthétiser les informations sur le naufrage",
            "Produire un SEA modélisant les données pertinentes",
            "Transformer le SEA en SLR et l'implémenter",
            "Écrire des tests pour vérifier les contraintes",
            "Extraire des informations pertinentes via des requêtes",
        ],
        techniques: [
            "Maîtrise de PostgreSQL pour la création de bases de données",
            "Aptitude à écrire des requêtes SQL complexes",
            "Capacité à tester et valider des contraintes",
        ],
        technologies: ["PostgreSQL", "SQL", "Modélisation BDD"],
        github: null,
    },
    acdeces: {
        title: "ACDeces - Logiciel de Pompes Funèbres",
        category: "Desktop",
        description:
            "ACDeces est une application de gestion d'événements spécialisée dans le domaine des pompes funèbres. Elle permet de gérer les différents aspects logistiques liés aux obsèques : contrats, employés, véhicules, prestations et rendez-vous clients. L'application dispose d'un calendrier intégré pour planifier les événements et visualiser les disponibilités. Elle implémente un système complet de persistence des données permettant de sauvegarder et restaurer l'état de l'application entre les sessions.",
        competences: [
            "Développement Java avec JavaFX",
            "Architecture MVC",
            "Interfaces graphiques FXML",
            "Gestion de données avec sérialisation",
            "Implémentation de systèmes de formulaires complexes",
            "Organisation et structure d'un projet professionnel",
        ],
        objectifs: [
            "Développer une application de gestion complète pour pompes funèbres",
            "Implémenter un système de planification d'événements",
            "Créer une interface utilisateur intuitive avec JavaFX",
            "Concevoir un système de persistance des données",
            "Gérer les contraintes métier spécifiques au domaine funéraire",
            "Permettre la gestion des ressources humaines et matérielles",
        ],
        techniques: [
            "Conception d'applications Java avec architecture MVC",
            "Création d'interfaces utilisateur avec JavaFX et FXML",
            "Implémentation de mécanismes de persistance de données",
            "Gestion des événements JavaFX et création de contrôleurs",
            "Organisation de code selon les principes de l'orienté objet",
            "Utilisation des collections Java pour la gestion des données",
        ],
        technologies: ["Java", "JavaFX", "MVC"],
        github: null,
    },
    pcpwidget: {
        title: "PCPWidget - Visualisation Interactive de Données Multidimensionnelles",
        category: "Visualisation & Recherche",
        description:
            "PCPWidget est un outil de visualisation interactif développé en C++ avec Qt6 pour analyser des données multidimensionnelles via la technique des coordonnées parallèles (PCP). Ce widget haute performance permet de charger des données Excel/CSV, d'appliquer des filtres interactifs, de réorganiser les axes par glisser-déposer, et offre une personnalisation avancée de l'affichage. Optimisé pour fonctionner sur un mur de 12 écrans 4K, il inclut des bindings Python et une intégration avec Rhino/Grasshopper pour la modélisation 3D.",
        competences: [
            "Développement C++ avancé avec Qt6",
            "Architecture logicielle modulaire",
            "Optimisation graphique haute performance",
            "Création de bindings Python-C++",
            "Interface utilisateur interactive avancée",
            "Gestion de fichiers Excel/CSV",
            "Documentation technique avec Doxygen",
            "Intégration avec outils de modélisation 3D",
        ],
        objectifs: [
            "Développer un widget C++/Qt performant pour la visualisation PCP",
            "Optimiser le rendu pour affichage multi-écrans 4K",
            "Implémenter des interactions avancées (filtres, glisser-déposer)",
            "Créer une architecture modulaire et extensible",
            "Fournir une personnalisation complète de l'affichage",
            "Développer des bindings Python pour l'interopérabilité",
            "Assurer l'intégration avec Rhino/Grasshopper",
        ],
        techniques: [
            "Programmation C++ moderne avec Qt6 et CMake",
            "Optimisation du rendu graphique pour haute résolution",
            "Développement d'interfaces utilisateur complexes avec Qt",
            "Architecture MVC et séparation des responsabilités",
            "Gestion avancée des événements souris et tactiles",
            "Sérialisation/désérialisation JSON pour la persistence",
            "Création de bibliothèques partagées multiplateformes",
            "Développement de bindings ctypes Python-C++",
            "Documentation automatique avec Doxygen",
            "Gestion de projet avec versioning GitLab",
            "Tests et optimisation pour environnements multi-écrans",
        ],
        technologies: [
            "C++17",
            "Qt6",
            "CMake",
            "Python",
            "QXlsx",
            "JSON",
            "Excel/CSV",
        ],
        github: null,
    },
};

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    modalTitle.textContent = project.title;

    const githubLink = project.github
        ? `<div class="project-links">
            <a href="${project.github}" target="_blank" class="btn primary">
                <i class="fab fa-github"></i>
                <span>Voir sur GitHub</span>
            </a>
        </div>`
        : "";

    modalBody.innerHTML = `
        <div class="project-category-badge">${project.category}</div>
        
        <div class="project-description">
            <p>${project.description}</p>
        </div>
        
        <div class="project-technologies">
            <h4>Technologies utilisées</h4>
            <div class="tech-tags">
                ${project.technologies
                    .map((tech) => `<span class="tech-tag">${tech}</span>`)
                    .join("")}
            </div>
        </div>
        
        <div class="project-specs">
            <div class="spec-item">
                <h4><i data-lucide="target"></i> Compétences</h4>
                <ul>
                    ${project.competences
                        .map((comp) => `<li>${comp}</li>`)
                        .join("")}
                </ul>
            </div>
            
            <div class="spec-item">
                <h4><i data-lucide="flag"></i> Objectifs</h4>
                <ul>
                    ${project.objectifs
                        .map((obj) => `<li>${obj}</li>`)
                        .join("")}
                </ul>
            </div>
            
            <div class="spec-item">
                <h4><i data-lucide="wrench"></i> Techniques acquises</h4>
                <ul>
                    ${project.techniques
                        .map((tech) => `<li>${tech}</li>`)
                        .join("")}
                </ul>
            </div>
        </div>
        
        ${githubLink}
    `;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    // Réinitialiser les icônes Lucide pour les nouvelles icônes ajoutées
    lucide.createIcons();
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
}

// Fermer modal en cliquant en dehors
window.onclick = function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeProjectModal();
    }
};

// === INITIALISATION VANILLA TILT POUR LES CARTES ===

function initializeVanillaTilt() {
    if (typeof VanillaTilt === "undefined") {
        console.warn(
            "VanillaTilt n'a pas été chargé. L'effet 3D ne fonctionnera pas correctement."
        );
        return;
    }

    const existingTiltElements = document.querySelectorAll("[data-tilt]");
    console.log(
        `Trouvé ${existingTiltElements.length} éléments avec data-tilt`
    );
    existingTiltElements.forEach((element) => {
        if (element.vanillaTilt) {
            element.vanillaTilt.destroy();
        }
    });

    const tiltElements = document.querySelectorAll("[data-tilt]");
    if (tiltElements.length > 0) {
        console.log(
            `Initialisation de VanillaTilt sur ${tiltElements.length} éléments`
        );
        VanillaTilt.init(tiltElements, {
            max: 8,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
            perspective: 1000,
            scale: 1.03,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            gyroscope: false,
        });
        console.log("VanillaTilt initialisé avec succès");
    } else {
        console.warn("Aucun élément avec data-tilt trouvé");
    }

    document.querySelectorAll(".project-card, .about-card").forEach((card) => {
        card.style.transformStyle = "preserve-3d";
        card.style.overflow = "visible";

        const contentElements = card.querySelectorAll("*");
        contentElements.forEach((element) => {
            element.style.transition =
                "transform 0.5s cubic-bezier(0.3, 1, 0.2, 1)";
            element.style.transform = "translateZ(0)";
            element.style.transformStyle = "preserve-3d";
            element.style.backfaceVisibility = "hidden";
        });

        const headings = card.querySelectorAll("h2, h3, h4");
        const paragraphs = card.querySelectorAll("p");
        const tags = card.querySelectorAll(
            ".project-tags span, .language-item, .outil-item"
        );
        const links = card.querySelectorAll("a, .project-link");
        const icons = card.querySelectorAll("i");

        headings.forEach((heading) => {
            heading.style.willChange = "transform";
        });

        paragraphs.forEach((paragraph) => {
            paragraph.style.willChange = "transform";
        });

        tags.forEach((tag) => {
            tag.style.transformStyle = "preserve-3d";
            tag.style.position = "relative";
            tag.style.willChange = "transform";
        });

        links.forEach((link) => {
            link.style.willChange = "transform";
        });

        icons.forEach((icon) => {
            icon.style.willChange = "transform";
        });
    });

    document.querySelectorAll(".about-grid, .projects-grid").forEach((grid) => {
        grid.style.transformStyle = "preserve-3d";
        grid.style.overflow = "visible";
    });
}

// === INTERACTIVITÉ ORIGINALE ===

function initializeMagneticHover() {
    const magneticSelectors = [
        ".project-link",
        ".footer-social a",
        ".contact-form .submit-btn",
    ];
    const elements = document.querySelectorAll(magneticSelectors.join(", "));
    const strength = 16;

    elements.forEach((el) => {
        const wrapMove = (e) => {
            const rect = el.getBoundingClientRect();
            const relX = e.clientX - rect.left - rect.width / 2;
            const relY = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${
                (relX / rect.width) * strength
            }px, ${(relY / rect.height) * strength}px)`;
        };
        const reset = () => {
            el.style.transform = "";
        };
        el.addEventListener("mousemove", wrapMove);
        el.addEventListener("mouseleave", reset);
    });
}

// Formulaire de contact avec mailto
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && subject && message) {
                sendEmail(name, subject, message);
            }
        });
    }
});

function sendEmail(name, subject, message) {
    const email = "paaul.rbn@gmail.com";
    const mailtoSubject = encodeURIComponent(subject);
    const mailtoBody = encodeURIComponent(message + "\n\n" + name);

    const mailtoLink = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoLink;
}
