document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, message });
        
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        
        form.reset();
    });
});
