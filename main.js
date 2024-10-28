function isValidPassword(password, username) {
    let isValid = true;

    switch (true) {
        case password.length < 8:
            isValid = false;
            break;
        case password.includes(' '):
            isValid = false;
            break;
        case password.toLowerCase().includes(username.toLowerCase()):
            isValid = false;
            break;
        default:
            // Password meets all criteria
            break;
    }

    return isValid;
}

// Test cases
console.log(isValidPassword('password123', 'john')); // true
console.log(isValidPassword('pass word', 'mary')); // false (contains space)
console.log(isValidPassword('short', 'bob')); // false (too short)
console.log(isValidPassword('bobspassword', 'bob')); // false (contains username)