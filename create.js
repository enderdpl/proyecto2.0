// DECLARAMOS LAS VARIABLES
var nameTag = document.querySelector("#name-tag");
var ParrafoTag = document.querySelector("#parrafo-tag");
var imgPresent= document.getElementById('img_presen');

//REALIZAMOS LA FUNCIONES DE EDICION EN HOJA BLANCO
// lo que se escribe en el imput se ve directamente en la pagina en blanco
function setName(element) {
    //console.log(element.value);
    nameTag.innerText = element.value;
}
 

function setparrafo(element) {
    //console.log(element.value);
    ParrafoTag.innerHTML = element.value;

}