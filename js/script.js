
class Turno {
    constructor (id, fecha, horario, precio) {
        this.id = id;
        this.fecha = fecha;
        this.horario = horario;
        this.precio = precio;
    }
}

// Turnos disponibles
const turnoDisponible1 = new Turno (1, "10/01/2022", "10:00 hs", 1000);
const turnoDisponible2 = new Turno (2, "15/01/2022", "09:30 hs", 2000);
const turnoDisponible3 = new Turno (3, "16/01/2022", "10:30 hs", 1500);
const turnoDisponible4 = new Turno (4, "18/01/2022", "11:30 hs", 1500);

// Creación del array de turnos.
let turnosContac = [turnoDisponible1, turnoDisponible2, turnoDisponible3, turnoDisponible4];

// Creación de las cards de turnos en la página Turnos
let divTurnos = document.getElementById ("divTurnos");

turnosContac.forEach (arrayDeTurnos => {
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

// Respuesta a la reserva de turno
let botones = document.getElementsByClassName ("botonReserva");
for (boton of botones) {
    boton.addEventListener(`click`, (e) => {
        const id = parseInt(e.target.id);
        const turno = turnosContac.find(turno => turno.id == id);
        Swal.fire({
            title:'Excelente!',
            text: `Su turno para el día ${turno.fecha} a las ${turno.horario} fue confirmado`,
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 4000
          })
       
    })
    };

    