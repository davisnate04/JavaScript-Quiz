const totalScore = document.getElementsByClassName("totalScore");
const input = document.getElementById("scoreInput");
const button = document.getElementById("submit");
const score = JSON.parse(localStorage.getItem("Time"));
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

// Sorts the high score and limits the high score to 5
function addInitials() {
if (input.value = "") {
    alert("Invalid Username");
} else {
    const newScore = {
        "score": score,
        "intials": input.value.trim()
    };

    highScore.push(newScore);

    highScore.sort((a,b) => b.score - a.score);

    highScore.splice(5);

    localStorage.setItem("highScore", JSON.stringify(highScore));

    input.value = "";
    window.location.assign('highscores.html');
    }
}

window.addEventListener('load', function() {

    for (const child of totalScore) {
        child.textContent = score;
    }
});
button.addEventListener("click", addInitials);