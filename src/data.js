import dataLOL from './data/lol/lol.js';

const dataLolAsArray = Object.values(dataLOL.data); //convierto la data en una array

//const arrayEasy = dataLOL.filter(champion => champion.difficulty >= 1 && champion.difficulty <= 3);


function crearCartas(cantPaginas, numPagina) {

    let cicloActual = (cantPaginas * numPagina) - cantPaginas;

    //Ciclo para recorrer la data e ir mostrando los personajes
    for (let i = 0; i < cantPaginas; i++) {

        let ch = i + cicloActual;
        //Creo un div section para el html dinamico
        const lolfront = document.createElement("section");

        contenedorCampeones.appendChild(lolfront); //Le doy un padre

        //Le asigno una id y una class
        lolfront.id = "lolfront" + dataLolAsArray[ch].id;
        lolfront.className = "lolfront";
        document.getElementById(lolfront.id).style.visibility = "visible";


        //Creo un elemento img para mostrar las imagenes
        const lolimg = document.createElement("img");
        lolimg.className = "lolimg";
        lolimg.src = dataLolAsArray[ch].img;


        //Creo elementos y le indico lo que debe ir mostrando cada uno
        const lolid = document.createElement("h1");
        lolid.textContent = dataLolAsArray[ch].id;

        const loltitle = document.createElement("h2");
        loltitle.textContent = dataLolAsArray[ch].title


        const lolblurb = document.createElement("h2");
        lolblurb.textContent = dataLolAsArray[ch].blurb;


        //Le doy un padre a todos los elementos creados
        lolfront.appendChild(lolimg);
        lolfront.appendChild(lolid);
        lolfront.appendChild(loltitle);
        lolfront.appendChild(lolblurb);


        // Parte de atrás
        const lolback = document.createElement("section");

        lolfront.appendChild(lolback); // Le doy un padre

        lolback.id = "lolback" + dataLolAsArray[ch].id;
        lolback.className = "lolback";
        document.getElementById(lolback.id).style.visibility = "hidden";

        //Creo los elementos que mostrará
        const loltags = document.createElement("h1");
        loltags.textContent = dataLolAsArray[ch].tags;

        //Contenedor Ataque
        const contattack = document.createElement("section");
        contattack.className = "atributos";
        const lolattack = document.createElement("h2");
        lolattack.textContent = "Attack     " + dataLolAsArray[ch].info.attack;
        const attackimg = document.createElement("img");
        attackimg.src = "../src/images/icon-attack.png";

        //Contenedor Defensa
        const contdefense = document.createElement("section");
        contdefense.className = "atributos";
        const loldefense = document.createElement("h2");
        loldefense.textContent = "Defense  " + dataLolAsArray[ch].info.defense;
        const defenseimg = document.createElement("img");
        defenseimg.src = "../src/images/icon-defense.png";

        //Contenedor Magic
        const contmagic = document.createElement("section");
        contmagic.className = "atributos";
        const lolmagic = document.createElement("h2");
        lolmagic.textContent = "Magic  " + dataLolAsArray[ch].info.magic;
        const magicimg = document.createElement("img");
        magicimg.src = "../src/images/icon-magic.png";

        //Contenedor Dificultad
        const contdifficulty = document.createElement("section");
        contdifficulty.className = "atributos";
        const loldifficulty = document.createElement("h2");
        loldifficulty.textContent = "Difficulty  " + dataLolAsArray[ch].info.difficulty;
        const difficultyimg = document.createElement("img");
        difficultyimg.src = "../src/images/icon-difficulty.png";


        //Les doy un padre
        lolback.appendChild(loltags);
        lolback.appendChild(contattack);
        lolback.appendChild(contdefense);
        lolback.appendChild(contmagic);
        lolback.appendChild(contdifficulty);

        //Padre Attack
        contattack.appendChild(lolattack);
        contattack.appendChild(attackimg);
        //Padre Defense
        contdefense.appendChild(loldefense);
        contdefense.appendChild(defenseimg);
        //Padre Magic
        contmagic.appendChild(lolmagic);
        contmagic.appendChild(magicimg);
        //Padre Dificultad
        contdifficulty.appendChild(loldifficulty);
        contdifficulty.appendChild(difficultyimg);


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

    }
};



//Paginacion

let paginaactual = 1;
const lolporpagina = 8;
let pagina = document.getElementById("page");



if (botonatras) {
    botonatras.addEventListener("click", () => { b_atras() })

    function b_atras() {
        if (paginaactual > 1) {
            paginaactual--;
            changePage(paginaactual);
        }
    }
}

if (botonsiguiente) {

    botonsiguiente.addEventListener("click", () => { b_siguiente() })

    function b_siguiente() {
        if (paginaactual < numPages()) {
            paginaactual++;
            changePage(paginaactual);
        }
    }
}


function changePage(page) {
    let botonsiguiente = document.getElementById("botonsiguiente");
    let botonatras = document.getElementById("botonatras");

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();
    contenedorCampeones.innerHTML = "";

    crearCartas(lolporpagina, page); // SE ACTIVA LA FUNCION CREAR CARTAS AL CARGAR LA WEB Y AL APRETAR LOS BOTONES

    pagina.innerHTML = page + "/" + numPages();

    if (page == 1) {
        botonatras.style.visibility = "hidden";
    } else { botonatras.style.visibility = "visible"; }
    if (page == numPages()) {
        botonsiguiente.style.visibility = "hidden";
    } else {
        botonsiguiente.style.visibility = "visible";

    }
}

function numPages() {
    return Math.ceil(dataLolAsArray.length / lolporpagina);
}

window.onload = function() {
    changePage(1);
}




























export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};

/*dataLolAsArray.forEach(champion => {
    contenedorCampeones.innerHTML += '<div id="contenedor-' + champion.id + '" class="contenedor-campeones"><img src="' + champion.img + '" width="100px"><p>' + champion.name + '</p><p style="text-align: justify;padding:15px;">' + champion.blurb + '</p></div>';
}) //aqui creo la card y la inserto en el contenedor padre */