let buttonGoQuiz = document.getElementById("goQuiz");
let quizes = []
let quizContent
let presenting = false;
class Quiz{
    questions = [];
    answeers = [];
    good_answeers = [];
    constructor(questions, answeers, good_answeers){
        this.questions = questions;
        this.answeers = answeers;
        this.good_answeers = good_answeers;
    }
}


let questions = [
    '¿Qué es un algoritmo?', 
    '¿Qué es un lenguaje de programación?', 
    '¿Qué es un compilador?', 
];

let answeers = [
    ["Verdadero", "Falso"], 
    ['Conjunto de instrucciones que se ejecutan en un orden determinado', 'Conjunto de instrucciones que se ejecutan en un orden aleatorio', 'Conjunto de instrucciones que se ejecutan en un orden indefinido'], 
    ['Conjunto de instrucciones que se ejecutan en un orden determinado', 'Conjunto de instrucciones que se ejecutan en un orden aleatorio', 'Conjunto de instrucciones que se ejecutan en un orden indefinido'], 
];

let good_answeers = [1, 1, [0,1]];

let quiz1 = new Quiz(questions, answeers, good_answeers);
quizes.push(quiz1);
quizes[1] = quiz1;

let value_select_global;

let buttonGo
let quiz
let instructions
let buttonAnsweers

function goQuiz(){
    instructions.innerHTML = '';
    console.log("quizContent");
    instructions.innerHTML = quizContent;
    presenting = true;
    countdown();
    document.getElementById('encabezado').style.display = 'none';
}

function countdown() {
    let timeLeft = 3 * 60 - 1;
    let intervalId = setInterval(() => {
        if (timeLeft != 0) {
            document.getElementById('left').innerHTML = `Tiempo restante: ${timeLeft} segundos`;
            timeLeft--;
        }
    }, 1000);

    setTimeout(() => {
        document.getElementById('left').innerHTML = `Tiempo restante: 0 segundos`;
        alert('Se acabó el tiempo');
        clearInterval(intervalId);
        location.reload();
    }, 3 * 60 * 1000); 
}

function createQuiz(quiz, index){
    quizContent = `
        <div id="quiz">
            <h2 class="numero-quiz">Quiz ${index}</h2>
            <p id="left"></p>
            <div>
                <form>
                    <p class="pregunta-quiz">1) ${quiz.questions[0]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta1" name="respuesta-v-1">
                            <label for="respuesta1"> Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta2" name="respuesta-v-1">
                            <label for="respuesta2">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">2) ${quiz.questions[0]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta1" name="respuesta-v-1">
                            <label for="respuesta1"> Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta2" name="respuesta-v-1">
                            <label for="respuesta2">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">3) ${quiz.questions[0]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta1" name="respuesta-v-1">
                            <label for="respuesta1"> Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta2" name="respuesta-v-1">
                            <label for="respuesta2">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">4) ${quiz.questions[0]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta1" name="respuesta-v-1">
                            <label for="respuesta1"> Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta2" name="respuesta-v-1">
                            <label for="respuesta2">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">5) ${quiz.questions[0]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta1" name="respuesta-v-1">
                            <label for="respuesta1"> Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta2" name="respuesta-v-1">
                            <label for="respuesta2">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">6) ${quiz.questions[0]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta1" name="respuesta-v-1">
                            <label for="respuesta1"> Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta2" name="respuesta-v-1">
                            <label for="respuesta2">Falso</label>
                        </div>
                    </fieldset>

                    <p class="pregunta-quiz">7) ${quiz.questions[1]} (seleccion simple)</p>
                    <fieldset class="seleccion-simple">
                        <div>
                            <input class="seleccion" type="radio" id="respuesta3" name="respuesta-s-2">
                            <label for="respuesta3">${quiz.answeers[1][0]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="radio" id="respuesta4" name="respuesta-s-2">
                            <label for="respuesta4">${quiz.answeers[1][1]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="radio" id="respuesta5" name="respuesta-s-2">
                            <label for="respuesta5">${quiz.answeers[1][2]}</label>
                        </div>
                    </fieldset>

                    <p class="pregunta-quiz">8) ${quiz.questions[2]} (seleccion multiple)</p>
                    <fieldset class="seleccion-multiple">
                        <div>
                            <input class="seleccion" type="checkbox" id="respuesta7" name="respuesta-m-5">
                            <label for="respuesta7">${quiz.answeers[2][0]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="checkbox" id="respuesta8" name="respuesta-m-5">
                            <label for="respuesta8">${quiz.answeers[2][1]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="checkbox" id="respuesta9" name="respuesta-m-5">
                            <label for="respuesta9">${quiz.answeers[2][2]}</label>
                        </div>
                    </fieldset>

                    <input class="enviar-respuesta" value="Enviar" id="sendQuiz" style="cursor:pointer" onclick=calculateScore(${index - 1})>
                </form>

            </div>
        </div>
    ` 

    buttonGo = document.getElementById('goQuiz');
    quiz = document.getElementById('quiz');
    instructions = document.getElementById('instructions');
    buttonAnsweers = document.getElementById('sendQuiz');
}

function calculateScore(index){
    let score = 0;
    let good_answeers = quizes[index].good_answeers;
    let answeers = quizes[index].answeers;
    let answers = document.querySelectorAll('.verdadero-falso input[type="radio"]:checked');
    let answers2 = document.querySelectorAll('.seleccion-simple input[type="radio"]:checked');
    let answers3 = document.querySelectorAll('.seleccion-multiple input[type="checkbox"]:checked');
    let goodAnsweer = false

    answers.forEach((a) => {
        console.log('a: ', a.nextElementSibling.textContent);
        if (a.nextElementSibling.textContent == answeers[0][good_answeers[0]]) {
            score++;
        }
    });
    answers2.forEach((a) => {
        if (a.nextElementSibling.textContent == answeers[1][good_answeers[1]]) {
            score++;
        }
    });
    for (let i = 0; i < answers3.length; i++) {
        let a = answers3[i];
        for (let j = 0; j < answeers[2].length; j++) {
            goodAnsweer = a.nextElementSibling.textContent == answeers[2][good_answeers[2][j]]
            if (goodAnsweer) {
                score++;
                break;
            }
        }    
        if (goodAnsweer) {
            break;
        }    
    }

    instructions.style.alignItems = 'center';
    if(score == 3){
        instructions.innerHTML = `
            <p>Felicidades, has aprobado el quiz</p>
            <a href="./quiz.html"><button style="color:#fff;text-decoration:none;">Volver</button></a>
        `
        guardarQuiz(index);
    }else{
        instructions.innerHTML = `
            <h2 class="titulo-quiz">Resultado</h2>
            <p>Respuestas correctas: ${score}</p>
            <p>Respuestas incorrectas: ${3 - score}</p>
            <a href="./quiz.html"><button style="color:#fff;text-decoration:none;">Volver</button></a>
        `
    }
}

function guardarQuiz(index){
    let repeat = false
    let user = JSON.parse(sessionStorage.getItem('user'));
    let users = JSON.parse(sessionStorage.getItem('users'));
    if (user.quizes.length > 0) {
        for (let i = 0; i < user.quizes.length; i++) {
            if (user.quizes[i] == index) {
                repeat = true
                console.log(repeat);
            }
        }
        if (repeat == false) {
            user.quizes.push(index);
        }
    }else{
        user.quizes.push(index);
    }
    user.quizes = [0, 1, 2, 3, 4, 5, 6];
    sessionStorage.setItem('user', JSON.stringify(user));
    users.forEach((element, index) => {
        if (element.username === user.username){
            users[index] = user;
        }
    });
    sessionStorage.setItem('users', JSON.stringify(users));
    if (user.quizes.length == 7) {
        certificate();
    }
}

function certificate(){
    let user = JSON.parse(sessionStorage.getItem('user'));
    instructions.innerHTML += `
            <p>¡Felicidades! Has completado todos los quizes</p>
            <a href="./certificate.html"><button style="color:#fff;text-decoration:none;">Ver certificado</button></a>
        `
}

function show_quiz(value_quiz){
    let user = JSON.parse(sessionStorage.getItem('user'));
    for (let i = 1; i < 8; i++) {
        if (value_quiz == i) {
            if (user.career == "cpp") {
                quiz = quizes[i-1];
            }
            if(user.career == "python"){
                quiz = quizes[i+6];
            }
            i = 8;
        }
        
    }
    createQuiz(quiz, value_quiz);
}

function showButton(value){
    if (value == 0) {
        buttonGoQuiz.style.display = 'none';
    }else{
        buttonGoQuiz.style.display = 'inline';
    }
}

showButton(0);

document.addEventListener('DOMContentLoaded', function(){
    const select = document.getElementById('seleccion_quiz');
    
    select.addEventListener('change',function(){
        const value_select = select.options[select.selectedIndex].value;
        value_select_global = value_select;
        showButton(value_select);
        show_quiz(value_select_global);
    })
    if (buttonAnsweers) {
        buttonAnsweers.addEventListener('click', function(event){
            instructions.innerHTML = instrucciones_original;
        })
    }
})

function getCertificate(){
    let user = JSON.parse(sessionStorage.getItem('user'));
    let getCertificateBtn = document.getElementById("certificate")
    if (user.quizes.length == 7) {
        getCertificateBtn.style.display = 'inline'
    }else{
        getCertificateBtn.style.display = 'none'
    }
}

getCertificate()