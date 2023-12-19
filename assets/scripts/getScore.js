const totalScore = document.getElementsByClassName("totalScore");
const input = document.getElementById("scoreInput");
const button = document.getElementById("submit");
const score = localStorage.getItem("Time");
const highScoreDefault = localStorage.setItem("highScore", []);

const highScore = JSON.parse(localStorage.getItem("highScore") || []);

for (const child of totalScore) {
    child.textContent = score;
}

function addInitials() {
if (input.textContent = "") {
    alert("Invalid Username");
} else {
    const newScore = {
        score: score,
        intials: input.value
    };

    highScore.push(newScore);

    highScore.sort((a,b) => b.score - a.score);

    highScore.splice(5);

    localStorage.setItem("highScore", JSON.stringify(highScore));
    }
}


button.addEventListener("click", addInitials);