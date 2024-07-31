document.addEventListener('DOMContentLoaded', function(){
    let valor_select_global;

    const select = document.getElementById('seleccion_quiz');
    
    select.addEventListener('change',function(){
        const valor_select = select.options[select.selectedIndex].value;
        valor_select_global = valor_select;
        console.log('hola: ',valor_select)
    })

    const boton_presentar = document.getElementById('presentar_quiz');
    const quiz_1 = document.getElementById('quiz_1');
    const quiz_2 = document.getElementById('quiz_2');
    const quiz_3 = document.getElementById('quiz_3');
    const quiz_4 = document.getElementById('quiz_4');
    const quiz_5 = document.getElementById('quiz_5');
    const quiz_6 = document.getElementById('quiz_6');
    const quiz_7 = document.getElementById('quiz_7');
    const variable_instrucciones = document.getElementById('instrucciones_quiz');
    const boton_respuestas_1 = document.getElementById('enviar_quiz_1');
    const boton_respuestas_2 = document.getElementById('enviar_quiz_2');
    const boton_respuestas_3 = document.getElementById('enviar_quiz_3');
    const boton_respuestas_4 = document.getElementById('enviar_quiz_4');
    const boton_respuestas_5 = document.getElementById('enviar_quiz_5');
    const boton_respuestas_6 = document.getElementById('enviar_quiz_6');
    const boton_respuestas_7 = document.getElementById('enviar_quiz_7');
    const instrucciones_original = variable_instrucciones.innerHTML;

    boton_presentar.addEventListener('click', function(){
        variable_instrucciones.innerHTML = '';
        if(valor_select_global == 1 || valor_select_global == null ){
            variable_instrucciones.innerHTML = quiz_1.innerHTML;
        }
        if(valor_select_global == 2){
            variable_instrucciones.innerHTML = quiz_2.innerHTML;
        }
        if(valor_select_global == 3){
            variable_instrucciones.innerHTML = quiz_3.innerHTML;
        }
        if(valor_select_global == 4){
            variable_instrucciones.innerHTML = quiz_4.innerHTML;
        }
        if(valor_select_global == 5){
            variable_instrucciones.innerHTML = quiz_5.innerHTML;
        }
        if(valor_select_global == 6){
            variable_instrucciones.innerHTML = quiz_6.innerHTML;
        }
        if(valor_select_global == 7){
            variable_instrucciones.innerHTML = quiz_7.innerHTML;
        }
    })

    boton_respuestas_1.addEventListener('click', function(event){
        variable_instrucciones.innerHTML = instrucciones_original;
    })

    boton_respuestas_2.addEventListener('click', function(event){
        variable_instrucciones.innerHTML = instrucciones_original;
    })
    boton_respuestas_3.addEventListener('click', function(event){
        variable_instrucciones.innerHTML = instrucciones_original;
    })
    boton_respuestas_4.addEventListener('click', function(event){
        variable_instrucciones.innerHTML = instrucciones_original;
    })
    boton_respuestas_5.addEventListener('click', function(event){
        variable_instrucciones.innerHTML = instrucciones_original;
    })
    boton_respuestas_6.addEventListener('click', function(event){
        variable_instrucciones.innerHTML = instrucciones_original;
    })
    boton_respuestas_7.addEventListener('click', function(event){
        variable_instrucciones.innerHTML = instrucciones_original;
    })
    
})




