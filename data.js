// estas funciones son de ejemplo
import dataLOL from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const contenedorCampeones = document.getElementById('contenedorCampeones');
// aqui transformo la data que viene como objeto en arreglo
let dataLolAsArray = Object.values(dataLOL.data);
//aqui agrego for each para recorrer la data
dataLolAsArray.forEach(champion=>{
  //aqui creo la card y la inserto en el contenedor padre
  contenedorCampeones.innerHTML += '<div id="contenedor-' + champion.id + '"><img src="' + champion.img + '" width="100px"><p>' + champion.name + '</p><p style="text-align: justify;padding:15px;">'+ champion.blurb+'</p></div>';
})
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
