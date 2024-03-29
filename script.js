const quiz= document.getElementById('quiz')
const quizHeader= document.querySelector('.quiz-header')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const startBtn= document.getElementById('start')
const startpg= document.getElementById('startpg')
const quizData = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        correct: "c"
    },
    {
        question: "The condition in an else/if statement is enclosed in:",
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parenthasis",
        d: "Square Brackets",
        correct: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        a: "Numbers and Strings",
        b: "Other Arrays",
        c: "Booleans",
        d: "All of the Above",
        correct: "d"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables:",
        a: "Commas",
        b: "Curly Brackets",
        c: "Quotes",
        d: "Parenthases",
        correct: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "Terminal/Bash",
        c: "For Loops",
        d: "Console Log",
        correct: "d"
    },
    
];

startBtn.addEventListener("click", () =>{
    startpg.style.display= "none";
    quizHeader.style.display= "block";
    timeEl.textContent = secondsLeft;
    loadQuiz();
    setTime();
})

let currentQuiz = 0
let score = 0


function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
        }else{
            secondsLeft=secondsLeft-10
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>You scored ${secondsLeft} points!<h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
        }
    }
)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 120;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {

      clearInterval(timerInterval);
        quiz.innerHTML =`
        <h2>You scored ${secondsLeft} points!<h2>
        
        <button onclick="location.reload()">Reload</button>
        `
    }

  }, 1000);
}