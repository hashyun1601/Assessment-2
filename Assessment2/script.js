// Variables to store user details
let phoneNumber;
let name;
let birthday;
let email;

document.getElementById('checkPointsForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
    phoneNumber = document.getElementById('mobileNumber').value;
 
    if(phoneNumber === '173527250') {
        // Hide page 1 and show page 2
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
    } else {
        alert('Invalid number');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    name = document.getElementById('name').value;
    birthday = document.getElementById('birthday').value;
    email = document.getElementById('email').value;

    // Hide page 2 and show page 3
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';

    // Display the user details on page 3
    document.getElementById('displayPhoneNumber').textContent = 'Phone Number: ' + phoneNumber;
    document.getElementById('displayName').textContent = 'Name: ' + name;
    document.getElementById('displayBirthday').textContent = 'Birthday: ' + birthday;
    document.getElementById('displayEmail').textContent = 'Email: ' + email;
});



