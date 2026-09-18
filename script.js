document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. LAZY LOADING & SCROLL ANIMATION
    // ==========================================
    const cards = document.querySelectorAll('.movie-card');
    
    const observer = new IntersectionObserver((entries) => {
        let delay = 0;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, delay);
                delay += 150; // 150ms staggered effect
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // ==========================================
    // 2. "COMING SOON" POPUP LOGIC
    // ==========================================
    // यह कोड वेबसाइट के किसी भी ऐसे लिंक को पकड़ेगा जिसमें # लगा हो या खाली हो
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            // अगर लिंक खाली है या सिर्फ '#' है
            if (href === '#' || href === '' || !href) {
                event.preventDefault(); // पेज को ऊपर जाने से रोकेगा
                alert('Coming soon!'); // पॉपअप दिखाएगा
            }
        });
    });

    // ==========================================
    // 3. SEARCH BAR LOGIC (अगर तुमने सर्च बॉक्स लगाया है तो)
    // ==========================================
    // ध्यान दें: तुम्हारे HTML में सर्च बॉक्स की ID 'searchInput' होनी चाहिए
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = searchInput.value.toLowerCase();
            
            cards.forEach(card => {
                const title = card.querySelector('.movie-title').innerText.toLowerCase();
                if (title.includes(filter)) {
                    card.style.display = ""; // अगर नाम मैच हुआ तो दिखाओ
                } else {
                    card.style.display = "none"; // नहीं हुआ तो छिपा दो
                }
            });
        });
    }

});