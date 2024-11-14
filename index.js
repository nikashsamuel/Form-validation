function validateForm() {
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('errorMessage');
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    errorMessage.textContent = "";

    if (!username) {
        errorMessage.textContent = "Please enter a valid username.";
        return false;
    }

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    if (!passwordPattern.test(password)) {
        errorMessage.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return false;
    }

    if (!/^\d{10}$/.test(contact)) {
        errorMessage.textContent = "Contact number must be exactly 10 digits.";
        return false;
    }

    if (!message) {
        errorMessage.textContent = "Please enter a message or address.";
        return false;
    }

    alert("Registration Successful!");
    return true;
}
