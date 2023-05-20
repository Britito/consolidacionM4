//5. variable global

let 


//1.clase de personaje

class Personaje{
    constructor(nombre, estatura, peso){
        this.nombre = nombre
        this.estatura = estatura
        this.peso = peso
    }

}

//2. consumo de API for fetch

const traerPersonaje = async (id)=> {
    try{
        let result = await fetch(`http https://swapi.dev/api/people/${id}`)
        let personaje = await result.json()
        crearPersonaje(personaje);
    }catch (error){
        throw new Error (error)
    }

    }

//3. función crear objeto personaje

const crearPersonaje = (personaje)=>{
    let personaje = new Personaje(personaje.name, personaje.height, personaje.mass)
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

    
}

// Funcion generadora
function * generador(){

}


//Funcion 