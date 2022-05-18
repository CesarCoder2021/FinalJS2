
class Turno {
    constructor (id, fecha, horario) {
        this.id = id;
        this.fecha = fecha;
        this.horario = horario;
    }
}

// Turnos disponibles
const turnoDisponible1 = new Turno (1, "23/05/2022", "10:00 hs");
const turnoDisponible2 = new Turno (2, "24/05/2022", "09:30 hs");
const turnoDisponible3 = new Turno (3, "24/05/2022", "10:30 hs");
const turnoDisponible4 = new Turno (4, "26/05/2022", "11:30 hs");

// Creación del array de turnos.
let turnosContac = [turnoDisponible1, turnoDisponible2, turnoDisponible3, turnoDisponible4];

// Guardar en localStorage
const guardarTurnosEnLocal = (clave, valor) => { 
    localStorage.setItem (clave,valor)
}
guardarTurnosEnLocal ("turnosEnLocal", JSON.stringify (turnosContac));
  
// Creación de las cards de turnos en la página Turnos
let divTurnos = document.getElementById ("divTurnos");

    // Trae los datos de los turnos del localStorage
const turnosDisponibles = JSON.parse (localStorage.getItem ("turnosEnLocal"))

function turnoActualizado () {
turnosDisponibles.forEach (arrayDeTurnos => {
    divTurnos.innerHTML += ` 
        <div class="card" id="producto${arrayDeTurnos.id}" style="width: 18rem;">
            <div class="card-body">
                <img src="/img/IconoContactologiaO.png" alt="Logo Contactologia">
                <h5 class="card-title">${arrayDeTurnos.fecha}</h5>
                <p class="card-text">${arrayDeTurnos.horario}</p>
                <button class= "botonReserva" id="${arrayDeTurnos.id}">Reservar este turno</button> 
            </div>
        </div>
        `
})
}
turnoActualizado();

// Respuesta a la reserva de turno (con fecha y hora)
let botones = document.getElementsByClassName ("botonReserva");
for (boton of botones) {
    boton.addEventListener(`click`, (e) => {
        const id = parseInt(e.target.id);
        const turno = turnosDisponibles.find(turno => turno.id == id);
        Swal.fire({
            title:'Excelente!',
            text: `Su turno para el día ${turno.fecha} a las ${turno.horario} fue confirmado`,
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 4000
        })
        // Elimino el turno reservado del array
        const index = turnosDisponibles.findIndex (turno => turno.id == id);
        turnosDisponibles.splice (index,1);
        document.getElementById ("divTurnos").innerHTML = " ";
        turnoActualizado ();
    })
};


