let buttonGoQuiz = document.getElementById("goQuiz");
let quizes = []
let quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10, quiz11, quiz12, quiz13, quiz14
let questions1 = [], questions2 = [], questions3 = [], questions4 = [], questions5 = [], questions6 = [], questions7 = [], questions8 = [], questions9 = [], questions10 = [], questions11 = [], questions12 = [], questions13 = [], questions14 = []
let answeers1 = [], answeers2 = [], answeers3 = [], answeers4 = [], answeers5 = [], answeers6 = [], answeers7 = [], answeers8 = [], answeers9 = [], answeers10 = [], answeers11 = [], answeers12 = [], answeers13 = [], answeers14 = []
let good_answeers1 = [], good_answeers2 = [], good_answeers3 = [], good_answeers4 = [], good_answeers5 = [], good_answeers6 = [], good_answeers7 = [], good_answeers8 = [], good_answeers9 = [], good_answeers10 = [], good_answeers11 = [], good_answeers12 = [], good_answeers13 = [], good_answeers14 = []

let quizContent
let presenting = false;
class Quiz {
    questions = [];
    answeers = [];
    good_answeers = [];
    constructor(questions, answeers, good_answeers) {
        this.questions = questions;
        this.answeers = answeers;
        this.good_answeers = good_answeers;
    }
}

questions1 = [
    "Las variables en C++ pueden ser declaradas sin ser inicializadas.",
    "La palabra clave const se utiliza para declarar constantes en C++.",
    "El tipo int puede almacenar valores decimales.",
    "Las constantes en C++ pueden ser modificadas después de su inicialización.",
    "El tipo char se utiliza para almacenar caracteres en C++. ",
    "El tipo long es un tipo de datos para números enteros más grandes en comparación con int.",
    "¿Cuál es la forma correcta de declarar una constante en C++?",
    "¿Qué tipos de datos se utilizan para almacenar números enteros en C++?"
]

answeers1 = [
    ["Verdadero", "Falso"],
    ["a) const int MAX = 100;", "b) int const MAX = 100;", "c) int MAX = const 100;", "d) const MAX = 100;"],
    ["a) int", "b) float", "c) double", "d) long"],
]

good_answeers1 = [1, 0, 1, 1, 0, 0, 0, [0, 3]]

quiz1 = new Quiz(questions1, answeers1, good_answeers1);
quizes.push(quiz1);

questions2 = [
    "El tipo float en C++ proporciona una mayor precisión que double.",
    "El tipo char se utiliza para almacenar números enteros en C++.",
    "En C++, el tipo bool puede tener dos valores: true o false.",
    "El tipo int puede almacenar valores de punto flotante.",
    "En C++, el tipo string es un tipo de dato primitivo.",
    "El tipo long en C++ puede almacenar valores enteros más grandes que int.",
    "¿Cuál es el tipo de dato adecuado para almacenar valores decimales en C++?",
    "¿Qué tipos de datos en C++ se utilizan para almacenar valores caracteres?"
]

answeers2 = [
    ["Verdadero", "Falso"],
    ["a) int", "b) float", "c) char", "d) bool"],
    ["a) int", "b) float", "c) string", "d) char"],
]

good_answeers2 = [1, 1, 0, 1, 1, 0, 1, [2, 3]]

quiz2 = new Quiz(questions2, answeers2, good_answeers2);
quizes.push(quiz2);

questions3 = [
    "En C++, puedes usar la estructura if-else para ejecutar bloques de código condicionalmente.",
    "La estructura switch en C++ permite evaluar una expresión contra varios valores posibles.",
    "El else en una estructura if-else es obligatorio.",
    "En C++, puedes usar operadores lógicos para combinar varias condiciones en una expresión if.",
    "La sentencia switch puede ser utilizada para evaluar valores de tipo float.",
    "El operador ternario en C++ es una forma compacta de escribir una instrucción if-else.",
    "¿Qué palabra clave se usa para proporcionar una alternativa a una condición if en C++?",
    "¿Qué estructuras de control condicional están disponibles en C++?"
]

answeers3 = [
    ["Verdadero", "Falso"],
    ["a) elif", "b) switch", "c) else", "d) case"],
    ["a) if", "b) else", "c) switch", "d) while"],
]

good_answeers3 = [0, 0, 1, 0, 1, 0, 2, [1, 2]]

quiz3 = new Quiz(questions3, answeers3, good_answeers3);
quizes.push(quiz3);

questions4 = [
    "Un ciclo for en C++ se utiliza cuando el número de iteraciones es conocido de antemano.",
    "El ciclo while en C++ se ejecuta al menos una vez, independientemente de la condición.",
    "El ciclo do-while garantiza que el bloque de código se ejecute al menos una vez.",
    "La sentencia break se usa para salir de un ciclo prematuramente.",
    "El ciclo for en C++ puede ser usado para iterar sobre arreglos.",
    "El ciclo for requiere una condición de finalización para funcionar correctamente.",
    "¿Qué palabra clave se utiliza para salir de un ciclo antes de que su condición de finalización sea alcanzada?",
    "¿Qué tipos de ciclos están disponibles en C++?"
]

answeers4 = [
    ["Verdadero", "Falso"],
    ["a) exit", "b) continue", "c) break", "d) return"],
    ["a) for", "b) while", "c) do-while", "d) repeat"]
]

good_answeers4 = [0, 1, 0, 0, 0, 1, 2, [0, 1, 2]]

quiz4 = new Quiz(questions4, answeers4, good_answeers4);
quizes.push(quiz4);

questions5 = [
    "Las funciones en C++ pueden devolver múltiples valores al mismo tiempo.",
    "En C++, puedes declarar una función después de su uso si proporcionas una declaración previa.",
    "Las funciones en C++ deben ser definidas antes de su uso a menos que se declare un prototipo de la función.",
    "El tipo de retorno void en C++ indica que una función no devuelve ningún valor.",
    "Puedes tener varias funciones con el mismo nombre en C++ siempre y cuando sus parámetros sean diferentes (sobrecarga de funciones).",
    "Las funciones en C++ pueden ser llamadas directamente dentro del bloque main().",
    "¿Qué palabra clave se utiliza para definir una función que no devuelve ningún valor?",
    "¿Qué aspectos se deben especificar al declarar una función en C++?"
]

answeers5 = [
    ["Verdadero", "Falso"],
    ["a) void", "b) int", "c) return", "d) empty"],
    ["a) Tipo de Retorno", "b) Nombre de la Funcion", "c) Variables Locales", "d) Parametros"]
]

good_answeers5 = [1, 0, 0, 0, 0, 0, 0, [0, 1, 3]]

quiz5 = new Quiz(questions5, answeers5, good_answeers5);
quizes.push(quiz5);

questions6 = [
    "En C++, los arrays pueden cambiar su tamaño dinámicamente después de la declaración.",
    "Los vectores en C++ proporcionan una manera de almacenar una colección de datos cuyo tamaño puede cambiar en tiempo de ejecución.",
    "Las cadenas de caracteres en C++ se representan usando el tipo de datos std::string.",
    "En C++, un mapa (std::map) almacena pares clave-valor y mantiene el orden de las claves.",
    "Los arrays en C++ deben ser inicializados con un tamaño fijo en el momento de la declaración.",
    "El tipo std::vector puede ser usado para almacenar elementos de diferentes tipos en C++."
]

answeers6 = [
    ["Verdadero", "Falso"],
    ["a) std::array", "b) std::vector", "c) std::map", "d) std::string"],
    ["a) std::vector", "b) std::array", "c) std::map", "d) std::set"]
]

good_answeers6 = [1, 0, 0, 0, 0, 1, 1, [0,1,2,3]]

quiz6 = new Quiz(questions6, answeers6, good_answeers6);
quizes.push(quiz6);

questions7 = [
    "Una clase en C++ puede contener tanto atributos como métodos.",
    "El concepto de herencia en C++ permite a una clase derivada acceder a métodos y atributos de una clase base.",
    "El polimorfismo en C++ se puede lograr mediante el uso de métodos virtuales en una clase base.",
    "Una clase abstracta en C++ no puede ser instanciada directamente y puede contener métodos puros.",
    "El concepto de encapsulación en C++ se refiere a la capacidad de una clase para ocultar detalles de implementación y exponer solo la interfaz pública.",
    "En C++, una clase derivada puede tener acceso a los métodos privados de su clase base.",
    "¿Qué palabra clave se usa para permitir que un método en una clase base sea sobreescrito por una clase derivada?",
    "¿Qué características se asocian con la Programación Orientada a Objetos en C++?"
]

answeers7 = [
    ["Verdadero", "Falso"],
    ["a) virtual", "b) override", "c) public", "d) protected"],
    ["a) Encapsulación", "b) Herencia", "c) Polimorfismo", "d) Modularidad"]
]

good_answeers7 = [0, 0, 0, 0, 0, 1, 0, [0,1,2]]

quiz7 = new Quiz(questions7, answeers7, good_answeers7);
quizes.push(quiz7);

questions8 = [
    "En Python, los nombres de las variables pueden comenzar con un número.",
    "Una variable en Python puede cambiar su tipo de dato durante la ejecución del programa.",
    "Las constantes en Python se definen usando la palabra clave const.",
    "Es una buena práctica nombrar las constantes en mayúsculas para diferenciarlas de las variables.",
    "El siguiente es un nombre válido para una variable en Python: _miVariable.",
    "Python permite el uso de espacios en los nombres de las variables."
]

answeers8 = [
    ["Verdadero", "Falso"],
    ["a) 1variable", "variable-uno", "variable_uno", "variable uno"],
    ["nombre_usuario", "nombreUsuario", "_nombreUsuario", "nombre usuario"]
]

good_answeers8 = [1, 0, 1, 0, 0, 1, 2, [0,1,2]]

quiz8 = new Quiz(questions8, answeers8, good_answeers8);
quizes.push(quiz8);

questions9 = [
    "En Python, los números enteros se definen usando el tipo de dato int.",
    "Los valores True y False son tipos de datos de cadena.",
    "Las cadenas de texto en Python se pueden definir usando comillas simples o dobles.",
    "El tipo de dato float se utiliza para números con parte decimal.",
    "En Python, las variables no pueden cambiar su tipo de dato una vez asignado.",
    "Los números complejos en Python se representan como a + bj, donde a y b son números reales.",
    "¿Cuál de los siguientes NO es un tipo de dato en Python?",
    "¿Cuáles de los siguientes son tipos de datos numéricos en Python? (Selecciona todas las que apliquen)"
]

answeers9 = [
    ["Verdadero", "Falso"],
    ["a) int", "b) float", "c) str", "d) real"],
    ["a) int", "b) float", "c) complex", "d) bool"]
]

good_answeers9 = [0, 1, 0, 0, 1, 0, 3, [0,1,2]]

quiz9 = new Quiz(questions9, answeers9, good_answeers9);
quizes.push(quiz9);

questions10 = [
    "La estructura if-elif-else en Python permite evaluar múltiples condiciones.",
    "Los operadores and, or, y not se utilizan en las condiciones para combinar múltiples expresiones.",
    "El siguiente código es válido en Python: if 5 > 3 print('Sí').",
    "Las condiciones en Python deben terminar con un punto y coma.",
    "Se pueden usar condicionales dentro de bucles for y while.",
    "En Python, la indentación es importante para definir bloques de código en las estructuras condicionales."
]

answeers10 = [
    ["Verdadero", "Falso"],
    ["a) =", "b) ==", "c) !=", "d) <>"],
    ["a) and", "b) or", "c) +", "d) not"]
]

good_answeers10 = [0, 0, 1, 1, 0, 0, 1, [0,1, 3]]
quiz10 = new Quiz(questions10, answeers10, good_answeers10);
quizes.push(quiz10);

questions11 = [
    "El ciclo while se ejecuta mientras la condición especificada sea verdadera.",
    "El ciclo for se utiliza para iterar sobre una secuencia como una lista o una cadena.",
    "La palabra clave break se utiliza para salir de un ciclo de manera anticipada.",
    "La palabra clave continue se utiliza para terminar un ciclo completamente.",
    "Los ciclos en Python no pueden ser anidados.",
    "El siguiente código es válido en Python: for i in range(5): print(i)."
]

answeers11 = [
    ["Verdadero", "Falso"],
    ["a) while", "b) for", "c) do-while", "d) loop"],
    ["a) while", "b) for", "c) continue", "d) break"]
]

quiz11 = new Quiz(questions11, answeers11, good_answeers11);
quizes.push(quiz11);

questions12 = [
    "Las funciones en Python se definen usando la palabra clave func.",
    "Una función puede devolver múltiples valores en Python.",
    "Las funciones en Python deben devolver un valor.",
    "El uso de self es obligatorio en la definición de todas las funciones.",
    "Las funciones en Python pueden tener parámetros con valores por defecto.",
    "Las funciones pueden ser pasadas como argumentos a otras funciones en Python.",
    "¿Cuál es la sintaxis correcta para definir una función en Python?",
    "¿Cuáles de los siguientes son usos válidos de las funciones en Python? (Selecciona todas las que apliquen)"
]

answeers12 = [
    ["Verdadero", "Falso"],
    ["a) def funcion():", "b) function funcion()", "definicion funcion():", "funcion()"],
    ["a) Reutilización de código", "b) Mejorar La legibilidad de codigo", "c) Evitar duplicación de código", "d) Manejar errores de ejecución"]
]

good_answeers12 = [1, 0, 1, 1, 0, 0, 0, [0,2]]

quiz12 = new Quiz(questions12, answeers12, good_answeers12);
quizes.push(quiz12);

questions13 = [
    "Las listas en Python son mutables, lo que significa que puedes cambiar sus elementos después de haber sido creadas.",
    "Las tuplas en Python son mutables, por lo que puedes cambiar sus elementos después de haber sido creadas.",
    "Los conjuntos (set) en Python permiten elementos duplicados.",
    "Los diccionarios en Python se definen usando llaves {} y almacenan pares clave-valor.",
    "Las listas pueden contener diferentes tipos de datos al mismo tiempo, como enteros, cadenas y otras listas.",
    "El método append() agrega un elemento al final de una lista.",
    "¿Cuál de las siguientes estructuras de datos en Python es inmutable?",
    "¿Cuáles de las siguientes operaciones son válidas para las listas en Python? (Selecciona todas las que apliquen)"
]

answeers13 = [
    ["Verdadero", "Falso"],
    ["a) Listas", "b) Tuplas", "c) Tupla", "d) Diccionarios"],
    ["a) append()", "b) extend()", "c) add()", "d) remove()"]
]

good_answeers13 = [0, 1, 1, 0, 0, 0, 2, [0,1]]

quiz13 = new Quiz(questions13, answeers13, good_answeers13);
quizes.push(quiz13);

questions14 = [
    "En Python, una clase es una plantilla para crear objetos.",
    "El método especial __init__ se utiliza para definir el comportamiento de la clase en sí.",
    "La herencia en Python permite que una clase herede atributos y métodos de otra clase.",
    "El polimorfismo permite que diferentes clases tengan métodos con el mismo nombre pero comportamientos diferentes.",
    "En Python, los métodos estáticos no tienen acceso a la instancia de la clase.",
    "Es obligatorio que todas las clases en Python tengan al menos un método."
]

answeers14 = [
    ["Verdadero", "Falso"],
    ["a) Definir métodos de la clase", "Inicializar los atributos del objeto", "Heredar atributos de otra clase", " Crear instancias de la clase"],
    ["a) Herencia", "b) Encapsulación", "c) Modularidad", "d) Agregacion"]
]

good_answeers14 = [0, 1, 0, 0, 0, 1, 1, [0,1]]
quiz14 = new Quiz(questions14, answeers14, good_answeers14);
quizes.push(quiz14);

let value_select_global;

let buttonGo
let quiz
let instructions
let buttonAnsweers

function goQuiz() {
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

function createQuiz(quiz, index) {
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
                            <label for="respuesta1">Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta2" name="respuesta-v-1">
                            <label for="respuesta2">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">2) ${quiz.questions[1]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta3" name="respuesta-v-2">
                            <label for="respuesta3">Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta4" name="respuesta-v-2">
                            <label for="respuesta4">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">3) ${quiz.questions[2]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta5" name="respuesta-v-3">
                            <label for="respuesta5">Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta6" name="respuesta-v-3">
                            <label for="respuesta6">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">4) ${quiz.questions[3]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta7" name="respuesta-v-4">
                            <label for="respuesta7">Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta8" name="respuesta-v-4">
                            <label for="respuesta8">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">5) ${quiz.questions[4]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta9" name="respuesta-v-5">
                            <label for="respuesta9">Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta10" name="respuesta-v-5">
                            <label for="respuesta10">Falso</label>
                        </div>
                    </fieldset>
                    <p class="pregunta-quiz">6) ${quiz.questions[5]} (Verdadero/Falso)</p>
                    <fieldset class="verdadero-falso">
                        <div>
                            <input type="radio" id="respuesta11" name="respuesta-v-6">
                            <label for="respuesta11">Verdadero</label>
                        </div>
                        <div>
                            <input type="radio" id="respuesta12" name="respuesta-v-6">
                            <label for="respuesta12">Falso</label>
                        </div>
                    </fieldset>

                    <p class="pregunta-quiz">7) ${quiz.questions[6]} (seleccion simple)</p>
                    <fieldset class="seleccion-simple">
                        <div>
                            <input class="seleccion" type="radio" id="respuesta13" name="respuesta-s-2">
                            <label for="respuesta13">${quiz.answeers[1][0]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="radio" id="respuesta14" name="respuesta-s-2">
                            <label for="respuesta14">${quiz.answeers[1][1]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="radio" id="respuesta15" name="respuesta-s-2">
                            <label for="respuesta15">${quiz.answeers[1][2]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="radio" id="respuesta16" name="respuesta-s-2">
                            <label for="respuesta16">${quiz.answeers[1][3]}</label>
                        </div>
                    </fieldset>

                    <p class="pregunta-quiz">8) ${quiz.questions[7]} (seleccion multiple)</p>
                    <fieldset class="seleccion-multiple">
                        <div>
                            <input class="seleccion" type="checkbox" id="respuesta17" name="respuesta-m-5">
                            <label for="respuesta17">${quiz.answeers[2][0]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="checkbox" id="respuesta18" name="respuesta-m-5">
                            <label for="respuesta18">${quiz.answeers[2][1]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="checkbox" id="respuesta19" name="respuesta-m-5">
                            <label for="respuesta19">${quiz.answeers[2][2]}</label>
                        </div>
                        <div>
                            <input class="seleccion" type="checkbox" id="respuesta20" name="respuesta-m-5">
                            <label for="respuesta20">${quiz.answeers[2][3]}</label>
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

function calculateScore(index) {
    let score = 0;
    let good_answeers = quizes[index].good_answeers;
    let answeers = quizes[index].answeers;
    let answers = document.querySelectorAll('.verdadero-falso input[type="radio"]:checked');
    let answers2 = document.querySelectorAll('.seleccion-simple input[type="radio"]:checked');
    let answers3 = document.querySelectorAll('.seleccion-multiple input[type="checkbox"]:checked');
    let goodAnsweer = false
    if (answers.length == 6) {

        answers.forEach((a, i) => {
            console.log("Respuesta ", a.nextElementSibling.textContent);
            console.log("Respuesta Correcta ", answeers[0][good_answeers[i]]);
            if (a.nextElementSibling.textContent == answeers[0][good_answeers[i]]) {
                console.log('a: ', a.nextElementSibling.textContent);
                score++;
            }
        });

        answers2.forEach((a) => {
            if (a.nextElementSibling.textContent == answeers[1][good_answeers[6]]) {
                score++;
            }
        });
        for (let i = 0; i < answers3.length; i++) {
            let a = answers3[i];
            for (let j = 0; j < answeers[2].length; j++) {
                goodAnsweer = a.nextElementSibling.textContent == answeers[2][good_answeers[7][j]]
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
        instructions.innerHTML = `
        <h2 class="titulo-quiz">Resultado</h2>
        <p>Respuestas correctas: ${score}</p>
        <p>Respuestas incorrectas: ${8 - score}</p>
        <a href="./quiz.html"><button style="color:#fff;text-decoration:none;">Volver</button></a>
    `
        if (score >= 4) {
            guardarQuiz(index);
            instructions.innerHTML += `
            <h2 class="titulo-quiz">Aprobaste el quiz</h2>
        `
        }
    } else {
        alert('Debes responder todas las preguntas')
    }
}

function guardarQuiz(index) {
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
    } else {
        user.quizes.push(index);
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    users.forEach((element, index) => {
        if (element.username === user.username) {
            users[index] = user;
        }
    });
    sessionStorage.setItem('users', JSON.stringify(users));
    if (user.quizes.length == 7) {
        certificate();
    }
}

function certificate() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    instructions.innerHTML += `
            <p>¡Felicidades! Has completado todos los quizes</p>
            <a href="./certificate.html"><button style="color:#fff;text-decoration:none;">Ver certificado</button></a>
        `
}

function show_quiz(value_quiz) {
    let user = JSON.parse(sessionStorage.getItem('user'));
    for (let i = 1; i < 8; i++) {
        if (value_quiz == i) {
            if (user.career == "cpp") {
                quiz = quizes[i - 1];
            }
            if (user.career == "python") {
                quiz = quizes[i + 6];
            }
            i = 8;
        }

    }
    createQuiz(quiz, value_quiz);
}

function showButton(value) {
    if (value == 0) {
        buttonGoQuiz.style.display = 'none';
    } else {
        buttonGoQuiz.style.display = 'inline';
    }
}

showButton(0);

document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('seleccion_quiz');

    select.addEventListener('change', function () {
        const value_select = select.options[select.selectedIndex].value;
        value_select_global = value_select;
        showButton(value_select);
        show_quiz(value_select_global);
    })
    if (buttonAnsweers) {
        buttonAnsweers.addEventListener('click', function (event) {
            instructions.innerHTML = instrucciones_original;
        })
    }
})

function getCertificate() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    let getCertificateBtn = document.getElementById("certificate")
    if (user.quizes.length == 7) {
        getCertificateBtn.style.display = 'inline'
    } else {
        getCertificateBtn.style.display = 'none'
    }
}

getCertificate()