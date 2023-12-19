const main = document.getElementById("quiz");
const question = document.getElementById("question");
const timer = document.getElementById("time");
const isCorrect = document.getElementById("isCorrect");
const totalScore = document.getElementById("totalScore");

let number = 0;
let time = 75;

// Sets the timer
let counter = setInterval(function () {
    time -= 1;
    timer.textContent = time;

    if (timer.textContent <= 0) {
        time = 0;
        localStorage.setItem("Time", String(time));
        window.location.assign("scores.html")
    }
    // Checks if done
    if (number === questions.length) {
        clearInterval(counter);

        console.log(time);
        localStorage.setItem("Time", String(time));
        window.location.assign("scores.html");
    }
    return time;
}, 1000);

// Sets the question and answers
function getQuestions() {
    for (let q = number; q < questions.length; q++) {

        question.textContent = questions[number].question;

        for (let i = 0; i < questions[number].answers.length; i++) {
            let answer = document.getElementById("answer" + (i + 1));

            answer.textContent = questions[number].answers[i];
        }
    }
}

function checkAnswer(event) {
        // Checks if you are clicking on the right buttons
        if (event.target.dataset.button === "answer") {
            if (event.target.textContent === questions[number].correctAnswer) {
                isCorrect.textContent = "Correct!"
                
                getQuestions(number += 1);
                return number;
            } else {
                isCorrect.textContent = "Wrong!"
                
                time -= 5;
                getQuestions(number += 1);
                return number;
            }
        }
}


window.addEventListener("load", () => { getQuestions();});
document.addEventListener("click", checkAnswer);