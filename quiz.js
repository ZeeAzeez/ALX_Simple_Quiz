function checkAnswer() {
  const correctAnswer = "4";

  // Retrieve the user's answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
