// Define variables and DOM reference elements
var current = 0;
var time = questions.length * 10;
var timerId;
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");

// Function to run quiz
function startQuiz() {
  // Start quiz, begin timer, show time, and unhide questions elements
  var startEl = document.getElementById("start-quiz");
  startEl.setAttribute("class", "hidden");

  questionsEl.removeAttribute("class");
  timerId = setInterval(clock, 1000);
  timerEl.textContent = time;
  generateQuestion();
}

// Runs quiz timer
function clock() {
  // Decrements time as the quiz continues ends quiz if time runs out
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

// Function to get questions from question sheet
function generateQuestion() {
  // Get question from question array, update and clear title and choices, display choice buttons
  var question = questions[current];
  var titleEl = document.getElementById("title");
  
  titleEl.textContent = question.title;
  choicesEl.innerHTML = "";

  // Choice loops over each question to create a button
  question.choices.forEach(function(choice, i) {
    var choiceButton = document.createElement("button");
    
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = i + 1 + ". " + choice;
    choiceButton.onclick = clickQuestion;
    choicesEl.appendChild(choiceButton);
  });
}

// Function to parse through wrong or right answer
function clickQuestion() {
  // Checks guess after click and decrements time if incorrect
  if (this.value !== questions[current].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    current++;
    if (current === questions.length) {
      endQuiz();
    } else {
      generateQuestion();
    }
  }
}

// Function to display hidden items: score, initials, and end quiz
function endQuiz() {
  clearInterval(timerId);
  var endEl = document.getElementById("end");
  endEl.removeAttribute("class");

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  questionsEl.setAttribute("class", "hidden");
}

// Function to save the players score to the list of high-scores
function saveScore() {
  // Validates initials and requests input, formats the initials and saves to local storage
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var score =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: initials
    };

    score.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(score));

    window.location.href = "highscores.html";
  }
}

// Function to verify "Enter" press for initials
function checkForEnter(event) {
  // Verifies if the player presses "Enter"
  if (event.key === "Enter") {
    saveScore();
  }
}

// Sets up key submission
submitBtn.onclick = saveScore;
startBtn.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter;
