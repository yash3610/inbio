(function () {
    'use strict';

    var posts = {
        'responsive-web-design': {
            date: 'June 6, 2026',
            title: 'Why responsive web design matters',
            image: 'assets/images/blog/blog-01.jpg',
            intro: 'A responsive website adapts its layout, navigation, images, and typography to the screen being used. That flexibility is now a basic requirement because visitors may arrive from a phone, tablet, laptop, or large desktop display.',
            firstHeading: 'A better experience on every screen',
            firstBody: 'Responsive design keeps content readable and actions easy to reach without forcing visitors to zoom or scroll sideways. A clear mobile layout helps people understand the business, explore its services, and contact it with less effort.',
            secondBody: 'One flexible website is also easier to maintain than separate desktop and mobile versions. Shared content and reusable components reduce duplication while keeping the visual experience consistent across devices.',
            secondHeading: 'Performance supports good design',
            finalBody: 'Responsive work should include optimized images, sensible breakpoints, accessible controls, and testing on real screen sizes. When layout and performance are considered together, the result feels faster, more polished, and more trustworthy.'
        },
        'business-website-guide': {
            date: 'May 28, 2026',
            title: 'How a business website builds trust',
            image: 'assets/images/blog/blog-02.jpg',
            intro: 'A business website is often the first place a potential customer checks before making contact. Its design, content, speed, and clarity all influence whether that visitor feels confident enough to take the next step.',
            firstHeading: 'Make the value clear',
            firstBody: 'The homepage should quickly explain what the business offers, who it helps, and what makes it different. Clear service descriptions and focused calls to action prevent visitors from having to search for basic information.',
            secondBody: 'Trust grows when a site includes authentic project examples, client feedback, accurate contact details, and consistent branding. These details show that the business is active, professional, and accountable.',
            secondHeading: 'Remove avoidable friction',
            finalBody: 'Fast pages, simple navigation, secure forms, and a dependable mobile experience make it easier for customers to act. A strong website does not rely on decoration alone; it earns confidence by being useful at every stage.'
        },
        'mobile-first-development': {
            date: 'May 15, 2026',
            title: 'A practical guide to mobile-first development',
            image: 'assets/images/blog/blog-03.jpg',
            intro: 'Mobile-first development starts with the smallest practical screen and progressively enhances the experience for larger displays. This approach keeps the essential content and actions at the center of the design.',
            firstHeading: 'Start with real priorities',
            firstBody: 'Limited screen space forces each section to justify its place. Begin with the information visitors need most, arrange it in a clear order, and make primary controls comfortable to use with touch.',
            secondBody: 'Once the compact layout works, use responsive breakpoints to introduce wider grids, supporting details, and richer interactions. The larger version should extend the same experience instead of becoming a separate design.',
            secondHeading: 'Test beyond the layout',
            finalBody: 'Mobile-first quality also depends on loading speed, keyboard access, readable type, image sizing, and form behavior. Testing these details early prevents small-screen problems from becoming expensive fixes later.'
        }
    };

    var cards = document.querySelectorAll('.rn-blog[data-blog-id]');
    var modalImage = document.getElementById('blog-modal-image');
    var modalDate = document.getElementById('blog-modal-date');
    var modalTitle = document.getElementById('blog-modal-title');
    var newsDetails = document.querySelector('#exampleModalCenters .news-details');

    if (!cards.length || !modalImage || !modalDate || !modalTitle || !newsDetails) {
        return;
    }

    var paragraphs = newsDetails.querySelectorAll('p');
    var headings = newsDetails.querySelectorAll('h4');

    function showPost(postId) {
        var post = posts[postId];

        if (!post || paragraphs.length < 4 || headings.length < 2) {
            return;
        }

        modalImage.src = post.image;
        modalImage.alt = post.title + ' cover image';
        modalDate.textContent = post.date;
        modalTitle.textContent = post.title;
        paragraphs[0].textContent = post.intro;
        headings[0].textContent = post.firstHeading;
        paragraphs[1].textContent = post.firstBody;
        paragraphs[2].textContent = post.secondBody;
        headings[1].textContent = post.secondHeading;
        paragraphs[3].textContent = post.finalBody;
    }

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            showPost(card.getAttribute('data-blog-id'));
        });
    });

    showPost(cards[0].getAttribute('data-blog-id'));
}());
