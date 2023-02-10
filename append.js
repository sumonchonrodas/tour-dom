// 1.where to add
const placesList =  document.getElementById('places-list');
//2.what to be added
const li = document.createElement('li');
li.innerText = 'Morich borta';
// 3.add the child
placesList.append(li)

//1. where to add
const mainContainer = document.getElementById('main-container')

//2.what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

//3.add the child
mainContainer.append(section);

const ul = document.createElement('ul');
const lil = document.createElement('li')
lil.innerText ='biryani';
ul.appendChild(lil);

const li2 = document.createElement('li')
lil.innerText ='Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li')
lil.innerText ='salad';
ul.appendChild(li3);

section.appendChild('ul')

// mainContainer.appendChild(section)