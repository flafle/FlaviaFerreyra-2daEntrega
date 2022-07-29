
//declaro claaw
class Player {
    constructor (nombre, email, pts1, pts2){
        this.nombre = nombre;
        this.email = email;
        this.pts1 = pts1;
        this.pts2 = pts2 ;
    }
    calcularScore () {
        return (this.pts1 + this.pts2)/2;
    }
}


// array para almacenar objetos.

const players = [];

//ciclo, valido
do {
    nombre= nombre;
    email=email;
    
      if (nombre!=nombre|| email!=email) //p/validar que coincidan
      {
       condicion=true;
      } else {
       condicion=false;
    }
    
    } while (condicion == true);



//tomar datos del formulario//creamos varibles necesarias

const idFormulario = document.getElementById("formulario");

idFormulario.addEventListener("submit", (e) => {
   e.preventDefault(); //con esto evitamos que el formulario siempre se este recargando. casi siempre se pone e o evente entre parametros.
   
   const nombre = document.getElementById("nombre").value;
   const email = document.getElementById ("email").value;
   const pts1= document.getElementById("pts1").value;
   const pts2 = document.getElementById("pts2").value;

   //creamos ek objeto Player:
    const player = new Player (nombre, email, pts1, pts2);


    //lo almaceno en el array.(players es el array )
    players.push(persona);


    //tenemos q ir almacenando la info, por eso guardamos todo este array en el local storage.
    localStorage.setItem("Player", JSON.stringify(players));

    //reiniciamos el fomr (limpiamos)
    idFormulario.reset();

    //muestro el resultado:
    mostrarInfo(player);
    console.localStorage(); //revisar esto!!!!!!!!!!!!
})

const score = document.getElementById("info");
const mostrarInfo = (player) => {
    let aux = "";
    aux += <p class="resultado">${player.nombre} tu Score es el siguiente: </p>;
    <p class="score"> Score: ${player.calcularScore()} </p>;
    score.innerHTML = aux;
}

//muestro el localstorage

const botonTotal = document.getElementById("total");

const datosTotal = document.getElementById("datosAdmin");

botonTotal.addEventListener("click", () => {
    const players = JSON.parse(localStorage.getItem("Player"));

//MODIFICO EL DOM PARA MOSTRARLO
    let aux = "";
   players.forEach (player=> {
        aux += `<p class= "score"> Nombre: ${persona.nombre}  </p>`;
        `<p class = "score"> Correo Electronico: ${persona.email} </p>`;   
    });
    <hr></hr>
    datosTotal.innerHTML = aux;

}
)



