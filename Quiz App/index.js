let quiz = [
    {
        question: "What is biggest animal in the world",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Smallest continent in the world",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Europe", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Largest continent in the world",
        answer: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "North America", correct: false },
        ]
    }
];

let container = document.getElementById("ans-btn");
let questions = document.getElementById("qna");
let nextbutton = document.getElementById("n-btn");

let currentQuesIndex = 0;
let score = 0;

// Start the quiz
function startquiz() {
    currentQuesIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuiz();
}

// Show one question with answers
function showQuiz() {
    resetState();  // clear old buttons

    let currentQuestion = quiz[currentQuesIndex];
    let questionNo = currentQuesIndex + 1;
    questions.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(e => {
        const button = document.createElement("button");
        button.innerHTML = e.text;
        button.classList.add("btn");
        if (e.correct) {
            button.dataset.correct = e.correct;
        }
        button.addEventListener("click", selectAnswer);
        container.appendChild(button);
    });
}

// Clear old buttons and hide next button
function resetState() {
    nextbutton.style.display = "none";
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectbutton = e.target;
    const iscorrect = selectbutton.dataset.correct === "true";

    if (iscorrect) {
        selectbutton.classList.add("correct");
        score++;
    } else {
        selectbutton.classList.add("incorrect");
    }

    // Show all correct answers
    Array.from(container.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextbutton.style.display = "block";
}

// Show final score
function showScore() {
    resetState();
    questions.innerHTML = `You scored ${score} out of ${quiz.length}`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}

// Handle clicking "Next" button
function handleNextbutton() {
    currentQuesIndex++;
    if (currentQuesIndex < quiz.length) {
        showQuiz();
    } else {
        showScore();
    }
}

// Button click
nextbutton.addEventListener("click", () => {
    if (currentQuesIndex < quiz.length) {
        handleNextbutton();
    } else {
        startquiz();
    }
});

// Start quiz on page load
startquiz();
