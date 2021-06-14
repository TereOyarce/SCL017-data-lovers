import dataLOL from './data/lol/lol.js';


const contenedorCampeones = document.getElementById("contenedorCampeones");

const dataLolAsArray = Object.values(dataLOL.data); //convierto la data en una array

//Ciclo para recorrer la data e ir mostrando los personajes
for (let i = 0; i < dataLolAsArray.length; i++) {

    //Creo un div section para el html dinamico
    const contenedorlol = document.createElement("section");

    //Le asigno una id y una class
    contenedorlol.id = "contenedorlol";
    contenedorlol.classname = "contenedorlol";

    //Creo un elemento img para mostrar las imagenes
    const lolimg = document.createElement("img");
    lolimg.className = "lolimg";
    lolimg.src = dataLolAsArray[i].img;


    //Creo elementos y le indico lo que debe ir mostrando cada uno
    const lolnombre = document.createElement("h1");
    lolnombre.textContent = dataLolAsArray[i].name;


    const lolblurb = document.createElement("h2");
    lolblurb.textContent = dataLolAsArray[i].blurb;


    //Le doy un padre a todos los elementos creados
    contenedorlol.appendChild(lolimg);
    contenedorlol.appendChild(lolnombre);
    contenedorlol.appendChild(lolblurb);

    contenedorCampeones.appendChild(contenedorlol); //Con esto,le indico que debe mostrar todo lo anterior 

};









/*const fragment = document.createDocumentFragment() //Guarda toda la estructura en un fragment

dataLolAsArray.forEach(champion => {
    const nuevodiv = document.createElement("div");
    nuevodiv.classList.add("list")



})
contenedorCampeones.appendChild(fragment);*/





// aqui transformo la data que viene como objeto en arreglo
//let dataLolAsArray = Object.values(dataLOL.data);
//aqui agrego for each para recorrer la data
/*dataLolAsArray.forEach(champion => {
        let divnuevo = document.createElement("div");
        divnuevo.id = "" + champion.id;
        divnuevo.classList.add("contenedor2");
        contenedorCampeones.innerHTML += 

    }) //aqui creo la card y la inserto en el contenedor padre */





export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};

/*dataLolAsArray.forEach(champion => {
    contenedorCampeones.innerHTML += '<div id="contenedor-' + champion.id + '" class="contenedor-campeones"><img src="' + champion.img + '" width="100px"><p>' + champion.name + '</p><p style="text-align: justify;padding:15px;">' + champion.blurb + '</p></div>';
}) //aqui creo la card y la inserto en el contenedor padre */