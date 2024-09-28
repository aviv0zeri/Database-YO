# Written Test Form

## Overview
This project is a simple web-based form designed to resemble a written test. Users can fill out the form with their answers to the questions provided.

## Files Included
- `index.html`: The main HTML file containing the form structure.
- `formstyle.css`: The CSS file for styling the form.
- `script.js`: The JavaScript file for handling form submission and validation.

## Instructions

### 1. Changing the Title
To change the title of the form:
- Open the `index.html` file.
- Locate the `<h1>` tag, which currently says:
  ```html
  <h1>Written Test</h1>

### 2. Adding Questions
To add more questions to the form:

Open the index.html file.
Locate the existing question blocks, which look like this:

<code>
    <div class="question">
    <label for="question1">1. What is the capital of France?</label>
    <input type="text" id="question1" name="question1" required>
</div>
<div class="question">
    <label for="question2">2. What is 2 + 2?</label>
    <input type="text" id="question2" name="question2" required>
</div>
<div class="question">
    <label for="question3">3. Describe the process of photosynthesis.</label>
    <textarea id="question3" name="question3" required></textarea>
</div>
</code>

Copy one of the question blocks and paste it below the last question block.
Change the question number, the question text, and the id and name attributes for each new question. For example, to add a fourth question:

<code>
    <div class="question">
    <label for="question4">4. What is the largest planet in our solar system?</label>
    <input type="text" id="question4" name="question4" required>
</div>
</code>

### 3. Changing Input Types

If you want to change the type of input (e.g., to a multiple-choice question):

Replace the <input type="text"> with appropriate HTML elements like <select>, <input type="radio">, or <input type="checkbox">.

For example, to create a multiple-choice question:

<code>
    <div class="question">
    <label for="question5">5. Which of the following is a programming language?</label>
    <select id="question5" name="question5" required>
        <option value="">Select an option</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="all">All of the above</option>
    </select>
</div
</code>

### 4. Styling Changes

To customize the appearance of the form:

Open the formstyle.css file.
Modify the existing styles or add new styles as needed. For example, you can change the background color by modifying:

<code>
    body {
        background-color: #f4f4f4; /* Change this to your desired color */
    }
</code>