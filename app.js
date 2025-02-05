console.log("Ejecutando el sistema")
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables
let nombres = [];
const inputNombre = document.getElementById('amigo');
const listaNombres = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombre = inputNombre.value.trim();
    
    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Validar que el nombre sea único
    if (nombres.includes(nombre)) {
        alert('El nombre ya está en la lista.');
        return;
    }
    
    // Actualizar el array de amigos
    nombres.push(nombre);
    
    // Actualizar la lista visible en la página
    actualizarLista();
    
    // Limpiar el campo de entrada
    inputNombre.value = '';
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (nombres.length === 0) {
        alert('Por favor, agrega nombres antes de sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    
    // Obtener el nombre sorteado
    const amigoSecreto = nombres[indiceAleatorio];
    
    // Mostrar el resultado
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

function actualizarLista() {
    // Limpiar la lista existente
    listaNombres.innerHTML = '';
    
    // Repetir (iterar) sobre el arreglo
    for (let i = 0; i < nombres.length; i++) {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = nombres[i];
        
        // Agregar el elemento a la lista
        listaNombres.appendChild(li);
    }
}
