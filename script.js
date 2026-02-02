const questions = [
  {
    question: "What is HTML?",
    answers: ["Programming Language", "Markup Language", "Database"],
    correct: 1
  },
  {
    question: "What does CSS do?",
    answers: ["Styles Website", "Runs Server", "Stores Data"],
    correct: 0
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[index].question;
  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  questions[index].answers.forEach((answer, i) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === questions[index].correct) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").innerText = "Your Score: " + score;
  }
}

loadQuestion();
