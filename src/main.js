import dataLOL from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const lista = document.getElementById('lista');
// aqui transformo la dsata que viene como objeto en arreglo
let dataLolAsArray = Object.values(dataLOL.data);
dataLolAsArray.map(champion=>{
    const li = document.createElement("li");
    li.innerHTML = champion.name
    lista.appendChild(li)
})