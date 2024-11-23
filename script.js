const questions = [
    "What is the capital of France?",
    "Who painted the Mona Lisa?",
    "What is the largest planet in our solar system?",
    "What year did World War II end?",
    "What is the chemical symbol for gold?"
];

let currentQuestionIndex = -1;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayNextQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = getRandomQuestion();
}

document.getElementById("nextBtn").addEventListener("click", displayNextQuestion);

// Display the first question when the page loads
displayNextQuestion();
