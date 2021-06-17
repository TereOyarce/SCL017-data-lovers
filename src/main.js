import dataLOL from './data/lol/lol.js';

//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// const abc = document.querySelector("abc");
// const tipos = document.querySelector("tipos");
// const stats = document.querySelector("stats");
// const dificultad = document.querySelector("dificultad");

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

//Aqui esta la funcionalidad de filtrar campeones
const buscarCampeon = document.getElementById("buscar")

/*Aqui se agrega evento de detectar cada tecla ingresada al imput.
Al addEventlistener se le manda como parametro de entrada un valor asociado al evento*/
buscarCampeon.addEventListener("keyup", (event) => {
    /*Aqui limpio el contenedor y borro las card.Esto se hace porque 
    se va a mostrarnueva data filtrada*/
    contenedorCampeones.innerHTML = ""

    console.log(event.key)
    console.log(event.target.value)

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
    const filterDataLol = dataLolAsArray.filter(campeon => campeon.name.includes(nombreCampeon))

    //Ciclo para recorrer la data e ir mostrando los personajes
    for (let i = 0; i < filterDataLol.length; i++) {

        //Creo un div section para el html dinamico
        const lolfront = document.createElement("section");

        contenedorCampeones.appendChild(lolfront); //Le doy un padre

        //Le asigno una id y una class
        lolfront.id = "lolfront" + filterDataLol[i].id;
        lolfront.className = "lolfront";
        document.getElementById(lolfront.id).style.visibility = "visible";


        //Creo un elemento img para mostrar las imagenes
        const lolimg = document.createElement("img");
        lolimg.className = "lolimg";
        lolimg.src = filterDataLol[i].img;


        //Creo elementos y le indico lo que debe ir mostrando cada uno
        const lolid = document.createElement("h1");
        lolid.textContent = filterDataLol[i].id;

        const loltitle = document.createElement("h2");
        loltitle.textContent = filterDataLol[i].title


        const lolblurb = document.createElement("h2");
        lolblurb.textContent = filterDataLol[i].blurb;


        //Le doy un padre a todos los elementos creados
        lolfront.appendChild(lolimg);
        lolfront.appendChild(lolid);
        lolfront.appendChild(loltitle);
        lolfront.appendChild(lolblurb);


        // Parte de atrás
        const lolback = document.createElement("section");

        lolfront.appendChild(lolback); // Le doy un padre

        lolback.id = "lolback" + filterDataLol[i].id;
        lolback.className = "lolback";
        document.getElementById(lolback.id).style.visibility = "hidden";

        //Creo los elementos que mostrará
        const loltags = document.createElement("h1");
        loltags.textContent = filterDataLol[i].tags;

        const lolattack = document.createElement("h1");
        lolattack.textContent = filterDataLol[i].info.attack;

        const loldefense = document.createElement("h1");
        loldefense.textContent = filterDataLol[i].info.defense;

        const lolmagic = document.createElement("h1");
        lolmagic.textContent = filterDataLol[i].info.magic;

        const loldificultad = document.createElement("h1");
        loldificultad.textContent = filterDataLol[i].info.difficulty;


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
})