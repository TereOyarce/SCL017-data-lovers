import dataLOL from './data/lol/lol.js';


let valorPaginaActual = 1;
const contenedorCampeones = document.getElementById("contenedorCampeones");

const dataLolAsArray = Object.values(dataLOL.data); //convierto la data en una array

function crearCartas(cantPaginas, numPagina, dataLolAsArray) {

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
        attackimg.src = "images/icon-attack.png";

        //Contenedor Defensa
        const contdefense = document.createElement("section");
        contdefense.className = "atributos";
        const loldefense = document.createElement("h2");
        loldefense.textContent = "Defense  " + dataLolAsArray[ch].info.defense;
        const defenseimg = document.createElement("img");
        defenseimg.src = "images/icon-defense.png";

        //Contenedor Magic
        const contmagic = document.createElement("section");
        contmagic.className = "atributos";
        const lolmagic = document.createElement("h2");
        lolmagic.textContent = "Magic  " + dataLolAsArray[ch].info.magic;
        const magicimg = document.createElement("img");
        magicimg.src = "images/icon-magic.png";

        //Contenedor Dificultad
        const contdifficulty = document.createElement("section");
        contdifficulty.className = "atributos";
        const loldifficulty = document.createElement("h2");
        loldifficulty.textContent = "Difficulty  " + dataLolAsArray[ch].info.difficulty;
        const difficultyimg = document.createElement("img");
        difficultyimg.src = "images/icon-difficulty.png";

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
}

//Aqui esta la funcionalidad de filtrar campeones

const buscarCampeon = document.getElementById("buscar");
buscarCampeon.addEventListener("keyup", (event) => {
    contenedorCampeones.innerHTML = ""
        // Aqui extraemos el valor ingresado por el usuario
    const nombreCampeon = event.target.value
        /**
         *paso1: creo variable filterDataLol 
         paso2: Usamos la data completa de los campeones y usamos el metodo filter
         paso3: Dentro de la condicion del filter usamos el objeto campeon y su atributo name
         paso4: al atributo del  campeon(name) le aplicamos la funcion includes.
                Esta funcion nos ayuda a comparar con el atributo name si hay coincidencias de busqueda entregando un valor booleano.
         * 
         * 
         */
    const filterDataLol = dataLolAsArray.filter(campeon => campeon.name.toLowerCase().includes(nombreCampeon.toLowerCase()))
    crearCartas(8, valorPaginaActual, filterDataLol);
});

//Paginacion

let paginaactual = 1;
const lolporpagina = 8;
let pagina = document.getElementById("page");
let botonsiguiente = document.getElementById("botonsiguiente");
let botonatras = document.getElementById("botonatras");




botonatras.addEventListener("click", () => { b_atras() })

function b_atras() {
    if (paginaactual > 1) {
        paginaactual--;
        changePage(paginaactual);
    }
}




botonsiguiente.addEventListener("click", () => { b_siguiente() })

function b_siguiente() {
    if (paginaactual < numPages()) {
        paginaactual++;
        changePage(paginaactual);
    }
}



function changePage(page) {


    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();
    contenedorCampeones.innerHTML = "";
    valorPaginaActual = page;
    crearCartas(lolporpagina, page, dataLolAsArray); // SE ACTIVA LA FUNCION CREAR CARTAS AL CARGAR LA WEB Y AL APRETAR LOS BOTONES

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

//Aqui esta la funcionalidad de ordenar campeones
const ordenCampeones = document.getElementById("AZA")
ordenCampeones.addEventListener("change", (event) => {
    contenedorCampeones.innerHTML = ""
        // Aqui extraemos el valor ingresado por el usuario
        // 0 y 1: Orden ascendente --> A a Z
        // 2: Orden Descendente --> Z a A
    const tipoOrden = Number(event.target.value)
    dataLolAsArray.sort(function(a, b) {
        // Este IF te da el orden ASCENDENTE
        // y el ELSE te da el orden DESCENDENTE
        if (tipoOrden == 0 || tipoOrden == 1) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        } else {
            // tipoOrden == 2
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        }
    });
    crearCartas(8, valorPaginaActual, dataLolAsArray);
});


//Aqui esta la funcionalidad de ordenar campeones
const filtrarPorTipo = document.getElementById("tipo")
filtrarPorTipo.addEventListener("change", (event) => {
    contenedorCampeones.innerHTML = ""
    const tipoCampeon = String(event.target.value)
    if (tipoCampeon == "0") {
        crearCartas(8, valorPaginaActual, dataLolAsArray);
    } else {
        const filterPorTipoLol = dataLolAsArray.filter(campeon => campeon.tags.includes(tipoCampeon))
        crearCartas(8, valorPaginaActual, filterPorTipoLol);
    }
});

//Filtrar po stats 
const filtrarPorStats = document.getElementById("stats");
let dataSorteada = dataLolAsArray;
const dataPorDefecto = JSON.parse(JSON.stringify(dataLolAsArray)); //Object nuevo sin referencia.
filtrarPorStats.addEventListener("change", (event) => {
    contenedorCampeones.innerHTML = "";
    const statsCampeon = String(event.target.value);
    switch (statsCampeon) {
        case "attack":
            {
                let attackCampeon = dataSorteada.sort(function(a, b) { return b.info.attack - a.info.attack });
                crearCartas(8, valorPaginaActual, attackCampeon);
                break;
            }
        case "defense":
            {
                let defenseCampeon = dataSorteada.sort(function(c, d) { return d.info.defense - c.info.defense });
                crearCartas(8, valorPaginaActual, defenseCampeon);
                break;
            }
        case "magic":
            {
                let magicCampeon = dataSorteada.sort(function(e, f) { return f.info.magic - e.info.magic });
                crearCartas(8, valorPaginaActual, magicCampeon);
                break;
            }
        default:
            crearCartas(8, valorPaginaActual, dataPorDefecto);
            break;
    }
});



//Aqui esta la funcionalidad de ordenar campeones
function filtrarPorRango(valorInicial, valorFinal) {
    return dataLolAsArray.filter(campeon => campeon.info.difficulty >= valorInicial && campeon.info.difficulty <= valorFinal)
}

const filtrarPorDificultad = document.getElementById("difficulty")
filtrarPorDificultad.addEventListener("change", (event) => {
    contenedorCampeones.innerHTML = ""
    const dificultadCampeon = String(event.target.value)
    let filterPorDificultadLol = [];
    switch (dificultadCampeon) {
        case "Easy":
            filterPorDificultadLol = filtrarPorRango(1, 3);
            crearCartas(8, valorPaginaActual, filterPorDificultadLol);
            break;
        case "Medium":
            filterPorDificultadLol = filtrarPorRango(4, 7);
            crearCartas(8, valorPaginaActual, filterPorDificultadLol);
            break;
        case "Hard":
            filterPorDificultadLol = filtrarPorRango(8, 10);
            crearCartas(8, valorPaginaActual, filterPorDificultadLol);
            break;

        default:
            crearCartas(8, valorPaginaActual, dataLolAsArray);
            break;
    }
});