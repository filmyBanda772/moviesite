
        
       
        // --- 1. HAMBURGER MENU LOGIC ---
        const sidebar = document.getElementById('sidebarMenu');
        const menuToggleBtn = document.getElementById('menuToggleBtn');
        const closeBtn = document.getElementById('closeBtn');

        menuToggleBtn.addEventListener('click', () => { sidebar.classList.add('active'); });
        closeBtn.addEventListener('click', () => { sidebar.classList.remove('active'); });

        // --- 2. SEARCH BAR LOGIC ('ENTER' KEY) ---
        const searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const query = event.target.value.toLowerCase();
                const movieCards = document.querySelectorAll('.movie-card');
                movieCards.forEach(card => {
                    const title = card.querySelector('.movie-title').textContent.toLowerCase();
                    if (title.includes(query)) {
                        card.style.display = "block"; 
                    } else {
                        card.style.display = "none";  
                    }
                });
            }
        });

        // --- 3. "COMING SOON" POPUP LOGIC ---
        const downloadButtons = document.querySelectorAll('.download-links .btn');

        downloadButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                const link = this.getAttribute('href');
                if (link === '#' || link === '' || !link) {
                    event.preventDefault(); 
                    alert('Coming soon!'); 
                }
            });
        });
     
        document.addEventListener("DOMContentLoaded", function() {
            const cards = document.querySelectorAll('.movie-card');
            
            // Intersection Observer (check that card is shown in screen or not)
            const observer = new IntersectionObserver((entries) => {
                let delay = 0;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // single card (150ms gap) load karne ka logic
                        setTimeout(() => {
                            entry.target.classList.add('show');
                        }, delay);
                        delay += 150; // next card ke liye 150ms extra
                        observer.unobserve(entry.target); // single time load 
                    }
                });
            }, { threshold: 0.1 }); // card load when 10% is shown 

            //  (Observer) for all cards
            cards.forEach(card => observer.observe(card));
        });  
    

