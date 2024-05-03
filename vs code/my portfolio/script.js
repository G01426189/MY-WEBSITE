document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Submit contact form
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you can add code to handle form submission, such as sending an AJAX request or displaying a success message
        // For example:
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        alert('Your message has been sent!');
        contactForm.reset(); // Reset form fields after submission
    });
});
