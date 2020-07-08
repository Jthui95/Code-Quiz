//start button
let startBtn = document.querySelector('#start')
//score tracker
let userScore = 0;
//time related variables
let timeLeft = document.querySelector('#left');
let secondsLeft = 75;
// relates to the formating of the quiz
let questions = document.querySelector("#questions");
let mainEl = document.querySelector('#main');
let timerEl = document.querySelector("#countdown");
let bodyEl = document.createElement("div");


//starts the quiz
startBtn.addEventListener('click', quiz);

// Starts timer and quiz
function quiz() {
    var timeInterval = setInterval(function(){
        secondsLeft--;
timeLeft.textContent = `${secondsLeft} seconds till game ends.`
    if(secondsLeft === 0){
    clearInterval(timeInterval)
    alert("Game Over");
    }
}, 1000 );
qOne();
//creates the question and answer
    function qOne(){
    let h = document.createElement("h2");
    h.textContent = "What is the main characters name in Pokemon?";
    questions.appendChild(h);

    let answer = ["Ash", "Brock", "Jake"];
   
    //creates the answer
    for(let i = 0; i < answer.length; i++ ){
        let answers = answer[i];
        let li = document.createElement('li');
        li.setAttribute('data-index',i);

        let button = document.createElement('button');
        button.textContent = answers;

        li.appendChild(button);
        questions.append(li);
    }
    questions.addEventListener("click", function(){
        if(answer === "Ash"){
            userScore++;
            alert("That's Correct!");
            setScoreText();
        }else(answer === "Brock" || answer === "Jake")
            secondsLeft--;
            alert("That's Incorrect!")
    })

            
    
// }
// }
// }

// if (element.matches('button')=== true){
//     let element = event.target


// }
//localStorage.setItem("score", score);
//sessionStorage.setItem("name", name);

// may not need
// function quiz(){
//     mainEl.append(bodyEl);
//     let quizInterval = setInterval(questionOne, milliseconds);

//     function questionOne(){
//         if(array[currentQuestion] === undefined){
//             // stop timer
//             clearInterval(quizInterval);
//         }else {
//             bodyEl.textContent = array[currentQuestion];
//             currentQuestion++;
//         }
    }
 }

// function quizSubmit(event){
// event.preventDefault();
// console.log('Event', event);

// let response = `Correct! ${asd}`;
// }
//.addEventListener('click', quizSubmit);
// each functio needs to ask their own question and have their own answer
// each function needs to have a ul and li to make options 
//input = something you collect info on

// make timer for the code on upper left
// add the ability to keep track of score for correct answer refer back to rock paper scizzors activity?
// keep track of score and stuff with computer storage high scores 

