(function () {
    'use strict';

    var projects = {
        'service-design': {
            category: 'Featured - Development',
            title: 'The services provide for design',
            image: 'assets/images/portfolio/portfolio-01.jpg',
            description: 'A responsive service website focused on presenting the business clearly and helping visitors reach the right offering quickly.',
            details: 'The project combines a clean interface, reusable sections, mobile-friendly layouts, and focused calls to action.',
            likes: 600
        },
        'mobile-app': {
            category: 'Featured - Application',
            title: 'Mobile app landing design & app maintenance',
            image: 'assets/images/portfolio/portfolio-02.jpg',
            description: 'A polished landing experience created to explain a mobile application and turn interested visitors into active users.',
            details: 'The layout highlights key features, product screens, maintenance support, and download actions across desktop and mobile devices.',
            likes: 750
        },
        'logo-design': {
            category: 'Featured - Photoshop',
            title: 'Logo design creativity & application',
            image: 'assets/images/portfolio/portfolio-03.jpg',
            description: 'A visual identity concept built around a memorable logo and a consistent presentation across digital touchpoints.',
            details: 'The work covers logo exploration, color direction, scalable assets, and practical brand usage for application interfaces.',
            likes: 630
        },
        'figma-services': {
            category: 'Featured - Figma',
            title: 'Mobile app landing design & services',
            image: 'assets/images/portfolio/portfolio-04.jpg',
            description: 'A Figma-based product design for a mobile service, from the first landing screen through its primary user actions.',
            details: 'Reusable components, clear spacing rules, responsive states, and a consistent visual system make the design ready for development.',
            likes: 360
        },
        'technology-design': {
            category: 'Featured - Web Design',
            title: 'Design for technology & services',
            image: 'assets/images/portfolio/portfolio-05.jpg',
            description: 'A modern technology website that organizes services, expertise, and business value into an easy-to-scan experience.',
            details: 'The project emphasizes accessible typography, responsive content blocks, strong hierarchy, and conversion-focused navigation.',
            likes: 280
        },
        'technology-app': {
            category: 'Featured - Web Design',
            title: 'App for technology & services',
            image: 'assets/images/portfolio/portfolio-06.jpg',
            description: 'An application interface designed to connect technology services with a simple and approachable customer journey.',
            details: 'The solution includes service discovery, clear interaction states, mobile responsiveness, and a consistent component library.',
            likes: 690
        }
    };

    var cards = document.querySelectorAll('.rn-portfolio[data-project-id]');
    var modalImage = document.getElementById('portfolio-modal-image');
    var modalCategory = document.getElementById('portfolio-modal-category');
    var modalTitle = document.getElementById('portfolio-modal-title');
    var modalDescription = document.getElementById('portfolio-modal-description');
    var modalDetails = document.getElementById('portfolio-modal-details');
    var modalLikes = document.getElementById('portfolio-modal-likes');
    var likeButton = document.getElementById('portfolio-like-button');
    var projectLink = document.getElementById('portfolio-project-link');
    var activeProjectId = null;

    if (!cards.length || !modalImage || !likeButton) {
        return;
    }

    function getLikeCount(projectId) {
        var storedLikes = window.localStorage.getItem('portfolio-likes-' + projectId);
        return storedLikes === null ? projects[projectId].likes : Number(storedLikes);
    }

    function updateCardLikeCount(projectId, likeCount) {
        var card = document.querySelector('.rn-portfolio[data-project-id="' + projectId + '"]');
        var count = card ? card.querySelector('.meta span') : null;

        if (count) {
            count.lastChild.textContent = ' ' + likeCount;
        }
    }

    function showProject(projectId) {
        var project = projects[projectId];

        if (!project) {
            return;
        }

        activeProjectId = projectId;
        modalImage.src = project.image;
        modalImage.alt = project.title + ' preview';
        modalCategory.textContent = project.category;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalDetails.textContent = project.details;
        modalLikes.textContent = getLikeCount(projectId);
        projectLink.href = project.image;
        projectLink.setAttribute('aria-label', 'View ' + project.title);
    }

    cards.forEach(function (card) {
        var projectId = card.getAttribute('data-project-id');
        updateCardLikeCount(projectId, getLikeCount(projectId));

        card.addEventListener('click', function () {
            showProject(projectId);
        });
    });

    likeButton.addEventListener('click', function () {
        if (!activeProjectId) {
            return;
        }

        var likeCount = getLikeCount(activeProjectId) + 1;
        window.localStorage.setItem('portfolio-likes-' + activeProjectId, String(likeCount));
        modalLikes.textContent = likeCount;
        updateCardLikeCount(activeProjectId, likeCount);
    });
}());
