// Function to save scores to local storage
function showScores() {
  // Loads scores from local storage sorts and displays each score as a list item
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });
  
  highscores.forEach(function(score) {
    var dash = document.createElement("li");
    dash.textContent = score.initials + " - " + score.score;
  
    var listEl = document.getElementById("highscores");
    listEl.appendChild(dash);
  });
}
  
// Function to remove high-scores
function clearScores() {
  // Removes all scores from local storage
  window.localStorage.removeItem("highscores");
  window.location.reload();
}
  
document.getElementById("clear").onclick = clearScores;
  
// Shows the high-scores on page load
showScores();