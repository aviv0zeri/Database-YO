// Array to store submitted answers
const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

// Handle form submission
document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from the input fields
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;
    const question3 = document.getElementById('question3').value;

    // Create an object to hold the answers
    const answers = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        question1: question1,
        question2: question2,
        question3: question3
    };

    // Add the answers to the submissions array
    submissions.push(answers);

    // Save to local storage
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Show a response message
    document.getElementById('response-message').innerText = "תשובות נשמרו!";

    // Reset the form
    document.getElementById('test-form').reset();
});
