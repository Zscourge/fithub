// Toggle sidebar
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Newsletter sign-up alert
document.querySelector('.newsletter button').addEventListener('click', function() {
    const email = document.querySelector('.newsletter input').value;
    if (email) {
        alert('Thank you for signing up!');
        document.querySelector('.newsletter input').value = '';
    }
});