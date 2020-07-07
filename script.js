let start = document.querySelector('#start')
let array ;
let ;
let currentQuestion = 0;

let mainEl = document.querySelector('#main');
let timerEl = document.querySelector("#countdown");
let bodyEl = document.createElement("div");

// console.log("elements",{
//     main: mainEl,
//     timer: timerEl,
//     body: bodyEl,
// })

let milliseconds = parseInt();

quiz.addEventListener('click', prepareQuiz)


function prepareQuiz() {
    let timeLeft = 5;
    let timeInterval = setInterval(countDown, 1000);
    function countDown(){
        timerEl.textContent = `${timeLeft} till quiz starts`;
        timeLeft--;

        if(timeLeft === 0){
            timerEl.textContent = "";
            quiz();
            clearInterval(timeInterval);
        }
    }
    
}

function quiz(){
    mainEl.append(bodyEl);
    let quizInterval = setInterval(questionOne, milliseconds);

    function questionOne(){
        if(array[currentQuestion] === undefined){
            // stop timer
            clearInterval(quizInterval);
        }else {
            bodyEl.textContent = array[currentQuestion];
            currentQuestion++;
        }
    }
}