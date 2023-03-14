// COMPONENTE CARD

const Card = ( arr ) => {
  // CREANDO EL ELEMENTO CARD
  const card = document.createElement('div') // <div></div>
  card.classList.add('card') // class='card'

  // CREANDO LA ICONO
  const icono = document.createElement('h2')
  icono.textContent = arr.icono

  // CREANDO EL ELEMENTO H3
  const h3 = document.createElement('h3') // <h3></h3>
  h3.textContent = arr.name            // <h3>Manzana</h3>

  // CREANDO EL ELEMENTO PRECIO
  const p = document.createElement('p')
  p.textContent = `$ ${arr.price}`

  // AÑADIENDO HIJOS AL ELEMENTO CARD
  card.append(icono)
  card.append(h3)
  card.append(p)
  return card
}