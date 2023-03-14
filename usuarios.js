const usuarios = [
  {id: 76, name: 'User A', email: 'userA@random.net'},
  {id: 77, name: 'User B',email: 'userB@random.net'},
  {id: 27, name: 'User C',email: 'userC@random.net', genero: 'famele'},
];

const container = document.querySelector('#app');

const Card = ( props ) => {
  const {id, name, email, genero} = props;
  return `<article class="card">
  <img src="https://randomuser.me/api/portraits/women/${id}.jpg" alt="">
  <h3>${name}</h3><p>${genero}</p>
  </article>`
}

usuarios.forEach( usuario => {
  container.innerHTML += Card( usuario );
});


const ul = document.createElement('ul');
const ol = document.createElement('ol');
// const li = document.createElement('li');

const frutas = ['🍎','🍐','🍊','🍌','🍉','🍑','🍓'];

// container.innerHTML = ''

frutas.forEach( fruta => {
  let li = document.createElement('li') // <li></li>
  li.textContent = fruta                // <li> fruta </li>
   ol.append(li)                        // <ol>
                                        //  <li>manzana</li>
                                        //  <li>pera</li>
                                        //  <li>naranja</li>
                                        //</ol>
})

container.append(ol)



