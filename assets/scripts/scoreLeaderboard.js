const list = document.getElementById('highScoreList');
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
const resetHighScore = document.getElementById("resetHighScore");

list.innerHTML = highScore.map(newScore => {
    return `<li class="scoreListItem">${newScore.intials} - ${newScore.score}</li>`;
}).join("");

function reset() {
    localStorage.setItem("highScore", []);

    list.innerHTML = "";
};


resetHighScore.addEventListener("click", reset, false);