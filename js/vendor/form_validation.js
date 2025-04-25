document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form');
    
    // If form exists, add validation
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent the form from submitting by default
            event.preventDefault();
            
            // Get form fields
            const nameField = document.querySelector('input[placeholder="Your Name"]');
            const emailField = document.querySelector('input[placeholder="Your Email"]');
            const phoneField = document.querySelector('input[placeholder="Your Phone Number"]');
            
            // Validation flags
            let isValid = true;
            
            // Validate name (required)
            if (!nameField.value.trim()) {
                highlightError(nameField, 'Please enter your name');
                isValid = false;
            } else {
                removeError(nameField);
            }
            
            // Validate email (required and format)
            if (!emailField.value.trim()) {
                highlightError(emailField, 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(emailField.value)) {
                highlightError(emailField, 'Please enter a valid email address');
                isValid = false;
            } else {
                removeError(emailField);
            }
            
            // Validate phone (required and format)
            if (!phoneField.value.trim()) {
                highlightError(phoneField, 'Please enter your phone number');
                isValid = false;
            } else if (!isValidPhone(phoneField.value)) {
                highlightError(phoneField, 'Please enter a valid phone number');
                isValid = false;
            } else {
                removeError(phoneField);
            }
            
            // If all validations pass, submit the form
            if (isValid) {
                // Redirect to thank you page
                window.location.href = 'thank_you.html';
            }
        });
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to validate phone format
    function isValidPhone(phone) {
        // Allow digits, spaces, dashes, parentheses, and plus sign
        const phoneRegex = /^[0-9\s\-\(\)\+]+$/;
        return phoneRegex.test(phone) && phone.replace(/[^0-9]/g, '').length >= 10;
    }
    
    // Helper function to highlight error
    function highlightError(field, message) {
        field.style.borderColor = 'red';
        
        // Check if error message already exists
        let errorSpan = field.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains('error-message')) {
            errorSpan = document.createElement('span');
            errorSpan.classList.add('error-message');
            errorSpan.style.color = 'red';
            errorSpan.style.fontSize = '0.8rem';
            errorSpan.style.display = 'block';
            errorSpan.style.marginTop = '5px';
            field.parentNode.insertBefore(errorSpan, field.nextSibling);
        }
        
        errorSpan.textContent = message;
    }
    
    // Helper function to remove error
    function removeError(field) {
        field.style.borderColor = '';
        
        // Remove error message if it exists
        const errorSpan = field.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.remove();
        }
    }
});
