import dataLOL from './data/lol/lol.js';


const contenedorCampeones = document.getElementById("contenedorCampeones");

const dataLolAsArray = Object.values(dataLOL.data); //convierto la data en una array


//Ciclo para recorrer la data e ir mostrando los personajes
for (let i = 0; i < dataLolAsArray.length; i++) {

    //Creo un div section para el html dinamico
    const lolfront = document.createElement("section");

    contenedorCampeones.appendChild(lolfront); //Le doy un padre

    //Le asigno una id y una class
    lolfront.id = "lolfront" + dataLolAsArray[i].id;
    lolfront.className = "lolfront";
    document.getElementById(lolfront.id).style.visibility = "visible";


    //Creo un elemento img para mostrar las imagenes
    const lolimg = document.createElement("img");
    lolimg.className = "lolimg";
    lolimg.src = dataLolAsArray[i].img;


    //Creo elementos y le indico lo que debe ir mostrando cada uno
    const lolid = document.createElement("h1");
    lolid.textContent = dataLolAsArray[i].id;

    const loltitle = document.createElement("h2");
    loltitle.textContent = dataLolAsArray[i].title


    const lolblurb = document.createElement("h2");
    lolblurb.textContent = dataLolAsArray[i].blurb;


    //Le doy un padre a todos los elementos creados
    lolfront.appendChild(lolimg);
    lolfront.appendChild(lolid);
    lolfront.appendChild(loltitle);
    lolfront.appendChild(lolblurb);


    // Parte de atrás
    const lolback = document.createElement("section");

    lolfront.appendChild(lolback); // Le doy un padre

    lolback.id = "lolback" + dataLolAsArray[i].id;
    lolback.className = "lolback";
    document.getElementById(lolback.id).style.visibility = "hidden";

    //Creo los elementos que mostrará
    const loltags = document.createElement("h1");
    loltags.textContent = dataLolAsArray[i].tags;

    const lolattack = document.createElement("h1");
    lolattack.textContent = dataLolAsArray[i].info.attack;

    const loldefense = document.createElement("h1");
    loldefense.textContent = dataLolAsArray[i].info.defense;

    const lolmagic = document.createElement("h1");
    lolmagic.textContent = dataLolAsArray[i].info.magic;

    const loldificultad = document.createElement("h1");
    loldificultad.textContent = dataLolAsArray[i].info.difficulty;


    //Les doy un padre
    lolback.appendChild(loltags);
    lolback.appendChild(lolattack);
    lolback.appendChild(loldefense);
    lolback.appendChild(lolmagic);
    lolback.appendChild(loldificultad);


    //Mostrar y ocultar la info de las carta
    lolfront.addEventListener("click", () => {
        let visiblefront = document.getElementById(lolfront.id).style.visibility;
        let visibleback = document.getElementById(lolback.id).style.visibility;
        if (visiblefront == "visible" && visibleback == "hidden") {
            document.getElementById(lolfront.id).style.visibility = "hidden";
            document.getElementById(lolback.id).style.visibility = "visible";
        } else {
            document.getElementById(lolfront.id).style.visibility = "visible";
            document.getElementById(lolback.id).style.visibility = "hidden";

        }

    })

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