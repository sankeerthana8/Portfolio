// JavaScript for portfolio functionality

// Function to toggle contact form visibility
function toggleContactForm() {
    var form = document.getElementById('contactForm');
    var button = document.getElementById('getInTouch');
    
    if (form.style.display === 'none') {
        form.style.display = 'block';
        button.style.display = 'none';
    } else {
        form.style.display = 'none';
        button.style.display = 'block';
    }
}

// Event listener for Get in Touch button
document.getElementById('getInTouch').addEventListener('click', toggleContactForm);

// Event listener for contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Log form values (in a real scenario, these would be sent to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    // Hide the form and show submission message
    this.style.display = 'none';
    document.getElementById('submissionMessage').style.display = 'block';
});
