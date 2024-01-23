let score = 0;
let questionIndex = 0;


const btnStart = document.querySelector('.btn1');
const questionsElement = document.querySelector('#questions');
const answerBtn = document.querySelector('.answers');
const nextBtn = document.querySelector('.btn2');


btnStart.addEventListener('click', function () {
    let newPageUrl = 'page2.html';
    window.location.href = newPageUrl;
    score = 0;
    questionIndex = 0;

    


    
});



