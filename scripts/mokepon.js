const sectionSelectionAtaque = document.getElementById('seleccionar-ataque')
const sectionSelectionReiniciar = document.getElementById('reiniciar')
const botMascota = document.getElementById('boton-mascota');

const botonreiniciar = document.getElementById('boton-reiniciar');

const sectionSelectionMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascotaJugador');

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo');

const spanVidasJugador = document.getElementById('vidasJugador');
const spanVidasEnemigo = document.getElementById('vidasEnemigo');

const sectionMensaje = document.getElementById('resultado')
const ataquesDeJugador = document.getElementById('ataquesDelJugador')
const ataquesDeEnemigo = document.getElementById('ataquesDelEnemigo')
const contenedorTarjetas= document.getElementById('contenedorTarjetas')

const contenedorAtaques=document.getElementById('contenedorAtaques')

let mokepones= []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones;

let inputhipodoge 
let inputcapipepo
let inputratigueya 
let ataquesMokepon
let ataqueMokeponEnemigo

let mascotaJugador

let botonFuego 
let botonAgua 
let botonTierra 
let botones = []

let indexAtaqueJugador
let indexAtaqueEnemigo

let resultado;
let vidasEnemigo = 3;
let vidasJugador = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
     }
}

let hipodoge = new Mokepon('Hipodoge', "./assets/mokepons_mokepon_hipodoge_attack.png", 5);
let capipepo = new Mokepon('Capipepo', "./assets/mokepons_mokepon_capipepo_attack.png", 5);
let ratigueya = new Mokepon('Ratigueya', "./assets/mokepons_mokepon_ratigueya_attack.png", 5);

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},    
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)



function iniciarJuego() {
    sectionSelectionAtaque.style.display = 'none'; //esconde esa seccion
    sectionSelectionReiniciar.style.display = 'none'; //esconde esa seccion

    mokepones.forEach((mokepon)=> {     //recorriendo el arreglo mokepones
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjetaMokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>`          //templates literarios, ` invertida, ahi vamos a meter la parte del html, se cambio, todo donde aparecia nombre por ${mokepon.nombre}

            contenedorTarjetas.innerHTML += opcionDeMokepones; //con la opcion += me imprime en el html todos los objetos que esten en opcionDePokemones

            inputhipodoge = document.getElementById('Hipodoge'); // se cambio la primera letra por mayuscula porque estamos buscando el id y debe ser igual
            inputcapipepo = document.getElementById('Capipepo');
            inputratigueya = document.getElementById('Ratigueya');
    })

    botMascota.addEventListener('click', seleccionMascoJugador);

    botonreiniciar.addEventListener('click', reiniciarJuego);
   //input.mascota.checked= false;
   

}

function seleccionMascoJugador() {
    sectionSelectionAtaque.style.display = 'flex'; //aparece la seccion que habia escondido
    //Estaba en block, se cambio a flex para darle estilo en css
    sectionSelectionMascota.style.display = 'none'; //esconde esa seccion
   
   
    if (inputhipodoge.checked) { // el checked pregunta si esa opcio fue seleccionada y si es correcto pasa true
        spanMascotaJugador.innerHTML = inputhipodoge.id; //innerHtml, nos permite cambiar el contenido de una etiqueta con su ID
        mascotaJugador = inputhipodoge.id; 
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = inputcapipepo.id;
        mascotaJugador = inputcapipepo.id;
        } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = inputratigueya.id;
        mascotaJugador = inputratigueya.id;
        } else {
           
        alert('Debes seleccionar una mascota');
        }
        extraerAtaques(mascotaJugador);
        seleccionMascoEnemigo();
}

function extraerAtaques(mascotaJugador){
    let ataques
    for(let i = 0; i< mokepones.length; i++){
        if (mascotaJugador == mokepones[i].nombre){
            ataques = mokepones[i].ataques;
        }
    } mostrarAtaques(ataques);
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{ 
        ataquesMokepon = `
        <button id=${ataque.id} class="botonDeAtaque BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMokepon  
    })

    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botones = document.querySelectorAll('.BAtaque') // trae los elementos con la clase Bataque
    

    }

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e)=>{ //buscamos en el evento el target, textcontet, en la consola
            if(e.target.textContent === "🔥"){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            else if(e.target.textContent === "💧"){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
            }else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
            }
            ataqueAleatorioEnemigo();
        })
    }) 
    
}

function seleccionMascoEnemigo() {
    let MascoAleatorio = aleatorio(0, mokepones.length-1);

    spanMascotaEnemigo.innerHTML = mokepones[MascoAleatorio].nombre // se elimino funcion de numero aleatorio de 1 a 3, se pone funcion que me de un numero aleatorio para una posicion del arreglo mokepones
    ataqueMokeponEnemigo = mokepones[MascoAleatorio].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataqueMokeponEnemigo.length - 1);

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1 ) {
        ataqueEnemigo.push('FUEGO') ;

    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA') ;
    } else {
        ataqueEnemigo.push('TIERRA');
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}
function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }
}
function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for(let i=0; i<ataqueJugador.length; i++){
        if(ataqueJugador[i] == ataqueEnemigo[i]){
            indexAmbosOponentes(i,i)
            crearMensaje('EMPATE')
        }
    }

    if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE🎆🎉')
        vidasEnemigo--
    } else if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATE')
    }
    else {
        crearMensaje('PERDISTE 😿🥀')
        vidasJugador--
    } spanVidasEnemigo.innerHTML = vidasEnemigo;
    spanVidasJugador.innerHTML = vidasJugador

    //Revisar vidas
    revisarvidas();

}

function revisarvidas() {
    if (vidasEnemigo == 0) {
        crearMensaje('')
        crearMensajeFinal('Felicitaciones GANASTE😊')

    } else if (vidasJugador == 0) {
        crearMensaje('')
        crearMensajeFinal('Mala Fortuna PERDISTE')

    } return
}

function crearMensaje(resultado) {
   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

    ataquesDeJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDeEnemigo.appendChild(nuevoAtaqueDelEnemigo);

    // parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' la mascota del enemigo atacó con ' + ataqueEnemigo + ', ' + resultado;
    // sectionMensaje.appendChild(parrafo); ya no se requiere, la idea es que no aparezca seguido

}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensaje.innerHTML=resultadoFinal;
    botonFuego.disabled = true; //atributo disabled deshabilita el boton
    botonAgua.disabled = true;
    botonTierra.disabled = true;

    
    sectionSelectionReiniciar.style.display = 'block';

}

function reiniciarJuego() {
    location.reload(); //recarga el html, por lo cual lo deja como cuando comienza
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// botMascota.addEventListener('click', seleccionMascoJugador => {
//     alert('seleccion ') una forma creando funcion inmediata
// });



window.addEventListener('load', iniciarJuego) //escucha la accion de carga de todo el documento, se creo la funcion Iniciar juego para que este dentro de esta las acciones, esto hacer que el juego corra cuando ya haya cargado todo

