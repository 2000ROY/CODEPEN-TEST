 function toggleMenu() {
            var navLinks = document.querySelector('.nav-links');
            if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
            }
        }

        function handleResize() {
            var navLinks = document.querySelector('.nav-links');
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('DOMContentLoaded', handleResize);
// /slider/ 



