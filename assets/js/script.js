//5. variable global

let salmon = document.getElementById("numeroSalmon");
let apple = document.getElementById("numeroSalmon");
let blue = document.getElementById("numeroSalmon");



//1.clase de personaje

class Personaje{
    constructor(nombre, estatura, peso){
        this.nombre = nombre
        this.estatura = estatura
        this.peso = peso
    }

}

//2. consumo de API for fetch

const traerPersonaje = async (id, color)=> {
    try{
        let result = await fetch(`http https://swapi.dev/api/people/${id}`)
        let personaje = await result.json()
        let algo = crearPersonaje(personaje);
        cargarTarjeta (algo, color);
        
    }catch (error){
        throw new Error (error)
    }

    }

//3. función crear objeto personaje

const crearPersonaje = (personaje)=>{
    let personaje = new Personaje(personaje.name, personaje.height, personaje.mass);
    return personaje
}



//4. crear tarjeta

const cargarTarjeta = (traerPersonaje, color)=>{
    let html = ` 
        <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-icon ${color}"></div>
                <div class="timeline-text">
                    <h6>${traerPersonaje.name}}</h6>
                    <p>Estatura: ${traerPersonaje.height}cm. Peso: ${traerPersonaje.mass} kg. </p>
                </div>
            </div>
        </div>
    </div>
        ` 
        return html
}

//5. Funcion generadora con 3 parámetos
function * generador(id, color){
    yield traerPersonaje(id, color);
    id++
    yield traerPersonaje(id, color);
    id++
    yield traerPersonaje(id, color);
    id++
    yield traerPersonaje(id, color);
    id++
    yield traerPersonaje(id, color);
    id++

}

let gen1 = generador(1, "salmon");
let gen2 = generador(6, "apple");
let gen3 = generador(12, "blue");

//6. 

salmon.addEventListener("mouseenter", () => {
    let data = gen1.next()
    data.done ? data.value : alert("no hay más personajes");
}) 
    
apple.addEventListener("mouseenter", () => {
    let data = gen1.next()
    data.done ? data.value : alert("no hay más personajes");
}) 
blue.addEventListener("mouseenter", () => {
    let data = gen1.next()
    data.done ? data.value : alert("no hay más personajes");
}) 

