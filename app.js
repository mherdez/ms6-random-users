const container = document.querySelector('#app');

// AÑADIENDO HIJOS AL CONTENEDOR PRINCIPAL
frutas.forEach( fruta => container.append( Card(fruta) ));
