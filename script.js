const toggleBtn = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggle menu on button click
    toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Hide menu when any mobile link is clicked
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        });
    });

const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/sutharhepin2610@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            successMessage.classList.remove('hidden');
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Error sending message.');
    });
});