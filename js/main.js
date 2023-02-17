answer_list = ['Yes, of course', 'i dont know', 'Maybe yes'];
let flag = false;

function question() {
    let questionInput = document.getElementById('question');
    let questionText = questionInput.value;
    let lastQuestion = document.getElementById('last');
    let answer = document.getElementById('answer');
    let form = document.getElementById('form');
    let formAgain = document.getElementById('form-again');

    if (questionText === "") {
        questionInput.classList.add("error")
        return;
    } else {
        questionInput.classList.remove("error")
    }

    form.classList.add('dnone');
    formAgain.classList.remove('dnone');

    questionInput.value = "";
    lastQuestion.textContent = "Your last question is : " + questionText;
    
    answer.classList.add('answer-new');
    answer.textContent = answer_list[Math.floor(Math.random() * (answer_list.length) )];
    console.log(Math.floor(Math.random() * (answer_list.length) ))
}

function again() {
    let form = document.getElementById('form');
    let formAgain = document.getElementById('form-again');

    form.classList.remove('dnone');
    formAgain.classList.add('dnone');

    answer.classList.remove('answer-new');
}