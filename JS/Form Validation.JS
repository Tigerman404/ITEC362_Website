function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('message').value;

    // Checks to see if Firstname is present
    if (firstName.trim() === '') {
        alert('Please enter your first name.');
        return false;
    }
    // Checks to see if Lastname is present
    if (lastName.trim() === '') {
        alert('Please enter your last name.');
        return false;
    }

    // Checks to see if Email is present and valid
    if (email.trim() === '') {
        alert('Please enter your email address.');
        return false;
    }
    
    // Checks to see if any notes are added
    if (message.trim() === '') {
        alert('Please enter your message.');
        return false;
    }

    // Thanks the user when the form is submitted properly
    alert('Thank you for submitting the form!');

    return true; 
}

//This took me wayyyyyyy too long to get to work lmao.
