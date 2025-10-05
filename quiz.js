// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // The correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        // No answer selected
        feedback.textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add click event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

