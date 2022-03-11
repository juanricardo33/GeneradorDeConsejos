// Variables y selectores
const btnGenerarAdvice = document.querySelector(".btn")
const textAdvice = document.querySelector("#textAdvice");
const numberAdvice = document.querySelector("#numberAdvice")


//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener("DOMContentLoaded", obtenerDatos)
    btnGenerarAdvice.addEventListener("click", obtenerDatos);
}

function obtenerDatos(){
    //location.reload()
    const url = "https://api.adviceslip.com/advice"
    fetch(url)
        .then(respuesta =>{
            console.log(respuesta);
            return respuesta.json()
        })
        .then( datos => {
            mostrarHTML(datos)
        })
        .catch(error =>{
            alert("Intentelo más tarde")
        })
}

function mostrarHTML(datos){
    const {id, advice} = datos.slip;
    console.log(id);
    console.log(advice);
    numberAdvice.textContent = "ADVICE #" + id;
    textAdvice.textContent = advice;
}