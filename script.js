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

//question 1 answers
let answerOne = ["Ash", "Brock", "Jake"];

//in it
// init();

// fucntion init(){
//     var storedAnswers = JSON.parse(localStorage.getItem('answerOne)'));

//     if(storedAnswerOne !== null) {
//         answerOne = storedanswerOne;
//     }
//     render
// }


//starts the quiz
startBtn.addEventListener('click', quiz);

// Starts timer and quiz
function quiz() {
    var timeInterval = setInterval(function(){
        secondsLeft--;
timeLeft.textContent = `Time: ${secondsLeft}`
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


   
    //creates the answer
    for(let i = 0; i < answerOne.length; i++ ){
        let answersOne = answerOne[i];
        let li = document.createElement('li');
        li.setAttribute('data-index',i);

        let button = document.createElement('button');
        button.textContent = answersOne;

        li.appendChild(button);
        questions.append(li);
    }
    questions.addEventListener("click", function(event){
        var element = event.target;
        if (element.matches("button") === true) {
                userScore++;
                alert("That's Correct!");
                console.log("button");
        } else if ("Brock" === false){
            secondsLeft--;
            alert("That's Incorrect!");
            console.log("That's Incorrect!");
        } else ("Jack" === false)
                alert("That's Incorrect! The correct answer is Ash");
                console.log(answer === "Jake");
                secondsLeft--;
        
    });

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

