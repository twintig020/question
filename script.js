const questions = [
    "What activities make me lose track of time because I enjoy them so much?",
    "How do I typically react to stress, and what can I learn from those reactions?",
    "What are the three most significant experiences that shaped who I am today?",
    "What do I fear the most, and how does that fear affect my behavior?",  
    "What does success look like to me, and why does it matter?",
    "What kind of relationships bring me the most joy and fulfillment?",
    "What emotions do I find difficult to express, and why might that be?",
    "If I could live my ideal day, what would it look like?"
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
