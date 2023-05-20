
//Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI() {}

//Llena la opciones de los usuarios
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector("#year")

    for(let i = max; i > min; i--){
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//instanciar ui 
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
    ui.llenarOpciones();//Llena el select con los años
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}

//Validacion
function cotizarSeguro(e) {
    e.preventDefault();

    //Leer marca seleccionada
    const marca = document.querySelector("#marca").value;

    //Leer año seleccionado
    const year = document.querySelector("#year").value;

    //Leer tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    
    if(marca === "" || year === "" || tipo === "") {
        console.log("No seleccionado");
    } else {
        console.log("Seleccionado");
    }
}