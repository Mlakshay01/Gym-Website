document.addEventListener("DOMContentLoaded", function() {
    // Handle service card click for mobile devices
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        const readMoreButton = card.querySelector('.card-button');
        readMoreButton.addEventListener('click', function(event) {
            event.preventDefault();
            card.classList.toggle('expanded');
            const expandedDesc = card.querySelector('.expanded-description');
            if (expandedDesc) {
                if (card.classList.contains('expanded')) {
                    expandedDesc.style.maxHeight = expandedDesc.scrollHeight + "px";
                    expandedDesc.style.opacity = 1;
                } else {
                    expandedDesc.style.maxHeight = 0;
                    expandedDesc.style.opacity = 0;
                }
            }
        });
    });

    // Observer for pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01 });

    pricingCards.forEach(card => {
        observer.observe(card);
    });
});
