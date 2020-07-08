let startBtn = document.querySelector('#start')
let score = 0;
// let count = ;
// let hs = ;
// let count = localStorage.getItem("count");
// counter.textContent = count;
let questions = document.querySelector("#questions");
let mainEl = document.querySelector('#main');
let timerEl = document.querySelector("#countdown");
let bodyEl = document.createElement("div");



// function quizSubmit(event){
//     event.preventDefault();
//     console.log('Event', event);
    
//     let response = `Correct! ${asd}`;
//     }
// click button to start quiz countdown 
startBtn.addEventListener('click', quiz);
    
// function prepareQuiz() {
//     let timeLeft = 5;
//     let timeInterval = setInterval(countDown, 1000);
//     function countDown(){
//         timerEl.textContent = `${timeLeft} seconds till quiz starts`;
//         timeLeft--;

//         if(timeLeft === 0){
//             timerEl.textContent = "";
//             clearInterval(timeInterval);
//             quiz();
//         }
//     }   


// Question 1
function quiz(){
    let h = document.createElement("h2");
    h.textContent = "What is the main characters name in Pokemon?";
    questions.appendChild(h);
    
    let answer = ["Ash", "Brock", "Jake"];
   
    //creates the answer
    for(let i = 0; i < answer.length; i++ ){
        let answers = answer[i];

        let li = document.createElement('li');
        // li.textContent = answers;
        li.setAttribute('data-index',i);

        let button = document.createElement('button');
        button.textContent = answers;

        li.appendChild(button);
        questions.append(li);
    }
    
}
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
//     }
// }

// function quizSubmit(event){
// event.preventDefault();
// console.log('Event', event);

// let response = `Correct! ${asd}`;
// }
//.addEventListener('click', quizSubmit);
// each functio needs to ask their own question and have their own answer
// each function needs to have a ul and li to make options 
//input = something you collect info on