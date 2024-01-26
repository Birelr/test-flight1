const questions = [
    {
        question : "Hangi element periyodik tabloda \"O\" simgesi ile temsil edilir?",
        answers : [
            { text : 'Oksijen', correct: true },
            { text : 'Osmiyum', correct: false },
            { text : 'Altın', correct: false },
            { text : 'Polonyum', correct: false }
        ]
    },
    {
        question : "Amerika Birleşik Devletleri'nin bağımsızlık savaşı hangi yıl başlamıştır?",
        answers : [
            { text : '1765', correct: false },
            { text : '1775', correct: true },
            { text : '1789', correct: false },
            { text : '1757', correct: false }
        ]
    },
    {
        question : "\"The Shawshank Redemption\" filminin yönetmeni kimdir?",
        answers : [
            { text : 'Martin Scorsese', correct: false },
            { text : 'Christopher Nolan', correct: false },
            { text : 'Francis Ford Coppola', correct: false },
            { text : 'Frank Darabont', correct: true }
        ]
    },
    {
        question : "Dünyanın en büyük okyanusu hangisidir?",
        answers : [
            { text : 'Hint Okyanusu', correct: false },
            { text : 'Atlas Okyanusu', correct: false },
            { text : 'Pasifik Okyanusu', correct: true },
            { text : 'Arktik Okyanusu', correct: false }
        ]
    }
    
]

let lastQuestion = questions.length;
let currQuestion =  0;
let score = 0;





const btnStart = document.querySelector('.btn1');
const questionsElement = document.querySelector('#questions');
const answerBtns = document.querySelectorAll('.btnAns');
const nextBtn = document.querySelector('.btn2');



function startBtn() {
    btnStart.classList.add('hide');
    questionsElement.classList.remove('hide');
    answerBtns.forEach(btn => btn.classList.remove('hide'));
    nextBtn.classList.remove('hide'); 
    setQuestions();
}

// Diğer fonksiyonlar aynı kalır


function setQuestions() {
    resetStat();
    let curQuestNo = currQuestion + 1;
    let currentQuestion = questions[currQuestion];
    questionsElement.innerHTML = curQuestNo + ". Soru: " + currentQuestion.question;
    currentQuestion.answers.forEach( answer => {
        let but1 = document.createElement('button')
        but1.innerText = answer.text
        but1.classList.add('btnAns')
        questionsElement.appendChild(but1);
        if (answer.correct){
            but1.dataset.correct = answer.correct;
        }
        but1.addEventListener('click', selectAnswer);
    }
        )
};

function resetStat() {
    nextBtn.classList.add('hide');
    while(questionsElement.firstChild){
        questionsElement.removeChild(questionsElement.firstChild);
    }
};

function handleNextButton() {
    currQuestion++;
    if (currQuestion < lastQuestion) {
        setQuestions();
    } else {
        showScore();
    }
}



function showScore() {
    resetStat();
    questionsElement.innerHTML = "Tebrikler! <br> Skorunuz: " + score + "/" + questions.length + " <br> Tekrar oynamak için sayfayı yenileyin.";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; 
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(questionsElement.children).forEach(btn => {
        if (btn.dataset.correct) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });
    nextBtn.classList.remove('hide');
    nextBtn.addEventListener('click', handleNextButton);
}


