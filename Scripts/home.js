function MoveSidebar(){
    var e = document.getElementById('Sidebar');

    e.style.right = '5px';
}

function CloseSidebar(){
    var e = document.getElementById('Sidebar');

    e.style.right = '-240px';
}



document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if(targetElement) {
                // Scroll to the top of the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }

           
        });
    });
});