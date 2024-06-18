document.addEventListener("DOMContentLoaded", function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    const readMoreButtons = document.querySelectorAll('.read-more');

    // Handle window resize
    function handleResize() {
        if (window.innerWidth <= 700) {
            pricingCards.forEach(card => {
                card.classList.add('slide-in');
                card.style.transform = 'none';
            });
        } else {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.01 });

            pricingCards.forEach(card => {
                card.classList.remove('slide-in');
                observer.observe(card);
            });
        }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.service-card');
            card.classList.toggle('expanded');
        });
    });
});

