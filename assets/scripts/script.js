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

    if (timer.textContent == 0) {
        window.location.assign("index.html")
    }
    return time;
}, 1000);

function getQuestions() {
    for (let q = number; q < questions.length; q++) {
        // Sets the Question

        question.textContent = questions[number].question;

        // Sets the answers to the question
        for (let i = 0; i < questions[number].answers.length; i++) {
            let answer = document.getElementById("answer" + (i + 1));

            answer.textContent = questions[number].answers[i];
        }
    }
}

// Checks if the answer is correct
function checkAnswer(event) {
    // Checks if the quiz is done
    if (number >= questions.length) {
        clearInterval(counter);

        console.log(time);
        localStorage.setItem("Time", String(time));
        window.location.assign("scores.html");
    }
    else {
        console.log(number)
        if (event.target.dataset.button === "answer") {
            if (event.target.textContent === questions[number].correctAnswer) {
                // console.log("Correct");
    
                isCorrect.textContent = "Correct"
                getQuestions(number += 1);
                return number;
            } else {
                // console.log("Wrong")
    
    
                isCorrect.textContent = "Wrong"
                
                getQuestions(number += 1);
                return number;
            }
        }
    }
}


window.addEventListener("load", () => { getQuestions();});
document.addEventListener("click", checkAnswer);