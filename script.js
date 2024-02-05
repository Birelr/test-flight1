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
    },
    {
        question: "Türkiye'nin başkenti neresidir?",
        answers: [
            { text: 'Ankara', correct: true },
            { text: 'İstanbul', correct: false },
            { text: 'İzmir', correct: false },
            { text: 'Diyarbakır', correct: false }
        ]
    },
    {
        question: "Güneş sistemindeki en büyük gezegen hangisidir?",
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Venüs', correct: false },
            { text: 'Jüpiter', correct: true },
            { text: 'Satürn', correct: false }
        ]
    },
    {
        question: "Dünyanın en uzun nehridir?",
        answers: [
            { text: 'Nil Nehri', correct: true },
            { text: 'Amazon Nehri', correct: false },
            { text: 'Yangtze Nehri', correct: false },
            { text: 'Mississippi Nehri', correct: false }
        ]
    },
    {
        question: "Hangi gezegen 'Akşam Yıldızı' olarak bilinir?",
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Venüs', correct: true },
            { text: 'Jüpiter', correct: false },
            { text: 'Satürn', correct: false }
        ]
    },
    {
        question: "Einstein'ın ünlü denklemi nedir?",
        answers: [
            { text: 'E=mc²', correct: true },
            { text: 'F=ma', correct: false },
            { text: 'A=πr²', correct: false },
            { text: 'y = mx + b', correct: false }
        ]
    },
    {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        answers: [
            { text: 'Ağrı Dağı', correct: true },
            { text: 'Kaçkar Dağı', correct: false },
            { text: 'Erciyes Dağı', correct: false },
            { text: 'Tahtalı Dağ', correct: false }
        ]
    },
    {
        question: "Hangi gezegenin bir günü Dünya'dan daha uzundur?",
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Jüpiter', correct: true },
            { text: 'Venüs', correct: false },
            { text: 'Uranüs', correct: false }
        ]
    },
    {
        question: "Hangi ülkenin başkenti Tokyo'dur?",
        answers: [
            { text: 'Çin', correct: false },
            { text: 'Hindistan', correct: false },
            { text: 'Japonya', correct: true },
            { text: 'Güney Kore', correct: false }
        ]
    },
    {
        question: "Dilimize Arapçadan geçmiş bir kelime hangisidir?",
        answers: [
            { text: 'Elma', correct: false },
            { text: 'Kalem', correct: false },
            { text: 'Saat', correct: false },
            { text: 'Kitap', correct: true }
        ]
    },
    {
        question: "Hangi yıl İstanbul'un fethi gerçekleşmiştir?",
        answers: [
            { text: '1453', correct: true },
            { text: '1299', correct: false },
            { text: '1520', correct: false },
            { text: '1683', correct: false }
        ]
    },
    {
        question: "Hangi gezegenin uydusu Europa'da okyanuslar bulunabilir?",
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Jüpiter', correct: true },
            { text: 'Venüs', correct: false },
            { text: 'Uranüs', correct: false }
        ]
    },
    {
        question: "Kaç yılda bir olimpiyat oyunları düzenlenir?",
        answers: [
            { text: '2', correct: false },
            { text: '4', correct: true },
            { text: '6', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: "Bir futbol takımında kaç oyuncu bulunur?",
        answers: [
            { text: '9', correct: false },
            { text: '10', correct: false },
            { text: '11', correct: true },
            { text: '12', correct: false }
        ]
    },
    {
        question: "Hangi yıl Leonardo da Vinci doğmuştur?",
        answers: [
            { text: '1452', correct: true },
            { text: '1520', correct: false },
            { text: '1401', correct: false },
            { text: '1600', correct: false }
        ]
    },
    {
        question: "Platon'un 'Mağara Alegorisi' neyi temsil eder?",
        answers: [
            { text: 'Bilgiyi elde etmeyi', correct: true },
            { text: 'Doğayı incelemeyi', correct: false },
            { text: 'Sanatı anlamayı', correct: false },
            { text: 'Toplumsal düzeni kurmayı', correct: false }
        ]
    },
    {
        question: "Hangi gezegenin adı bir renk değildir?",
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Venüs', correct: false },
            { text: 'Jüpiter', correct: true },
            { text: 'Satürn', correct: false }
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


