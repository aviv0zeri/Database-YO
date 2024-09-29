// Load submissions from local storage
function loadSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const tbody = document.getElementById('answers-table').getElementsByTagName('tbody')[0];

    // Populate the table with data
    submissions.forEach((submission) => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = submission.fullName;
        row.insertCell(1).innerText = submission.phoneNumber;
        row.insertCell(2).innerText = submission.question1;
        row.insertCell(3).innerText = submission.question2;
        row.insertCell(4).innerText = submission.question3;
    });
}

// Clear the submissions from local storage
function clearSubmissions() {
    const confirmClear = confirm("האם אתה בטוח שברצונך למחוק את כל התשובות?");
    if (confirmClear) {
        localStorage.removeItem('submissions'); // Clear the submissions
        alert("המאגר נמחק בהצלחה!"); // Success message
        // Refresh the table
        document.querySelector('#answers-table tbody').innerHTML = '';
    }
}

// Add event listener to the clear button
document.getElementById('clear-database').addEventListener('click', clearSubmissions);

// Call loadSubmissions when the page loads
document.addEventListener('DOMContentLoaded', loadSubmissions);
