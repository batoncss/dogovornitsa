export function switchingMenuBacklight(){
    document.addEventListener("DOMContentLoaded", function() {
        let currentPath = window.location.pathname;
        let links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    });
}
