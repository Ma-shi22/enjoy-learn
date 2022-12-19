// AÑADIR PARTICIPANTE
function change() {
    let newSquare = "<div class='redSquare'></div>";
    let articleElement = document.querySelector('article');
    articleElement.innerHTML += newSquare;
}




// BOTON TRASH

function renderCross() {
    let arrayDelete = document.querySelectorAll('.delete')
    for (let i=0; i<arrayDelete.length; i++) {
        if (arrayDelete[i].style.display == "none") {
            arrayDelete[i].style.display = "block";
        }
        else if (arrayDelete[i].style.display == "block") {
            arrayDelete[i].style.display = 'none';
        }
    }

}

// ELECCION PARTICIPANTE ALEATORIO
const array_players = 
[
    'Celia' ,
    'Maria' ,
    'Diana' ,
    'Miriam'
]

document.querySelector("#btn-agregar").addEventListener("click", agregar);

function agregar() {
    let nombre = document.querySelector('#nombre').value;

    // agrego elemento al array
    array_players.push(nombre);
    console.log(array_players);

    // vaciar el input
    document.querySelector('#nombre').value = "";
    
}
