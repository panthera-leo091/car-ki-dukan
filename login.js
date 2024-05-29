function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation, replace with server-side validation in a real scenario
    if (username === 'demo' && password === 'password') {
        // Redirect to a dashboard or home page
        alert('Login successful!');
    } else {
        errorMessage.innerHTML = 'Invalid username or password. Please try again.';
    }
}
