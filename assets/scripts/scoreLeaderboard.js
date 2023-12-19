const list = document.getElementById('highScoreList');
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
const resetHighScore = document.getElementById("resetHighScore");


list.innerHTML = highScore.map(newScore => {
    return `<li class="scoreListItem">${newScore.intials} - ${newScore.score}</li>`;
}).join("");


resetHighScore.addEventListener("click", function() {
    localStorage.setItem("highScore", []);

    list.innerHTML = "";
});