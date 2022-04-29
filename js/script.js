class Turno {
    constructor (id, fecha, horario, precio) {
        this.id = id;
        this.fecha = fecha;
        this.horario = horario;
        this.precio = precio;
    }
}

const turnoDisponible1 = new Turno (1, "10/01/2022", "10:00 hs", 1000);
const turnoDisponible2 = new Turno (2, "15/01/2022", "09:30 hs", 2000);
const turnoDisponible3 = new Turno (3, "16/01/2022", "10:30 hs", 1500);
const turnoDisponible4 = new Turno (4, "18/01/2022", "11:30 hs", 1500);

let turnosContac = [turnoDisponible1, turnoDisponible2, turnoDisponible3, turnoDisponible4];

let divTurnos = document.getElementById ("divTurnos");

turnosContac.forEach (arrayDeTurnos => {
    divTurnos.innerHTML += ` 
        <div class="card" id="producto${arrayDeTurnos.id}" style="width: 18rem;">
            <div class="card-body">
                <img src="/img/IconoContactologiaO.png" alt="Logo Contactologia">
                <h5 class="card-title">${arrayDeTurnos.fecha}</h5>
                <p class="card-text">${arrayDeTurnos.horario}</p>
                <button class= "botonReserva">Reservar este turno</button> 
            </div>
        </div>
        `
})

let botones = document.getElementsByClassName ("botonReserva");

for (boton of botones) {
boton.addEventListener(`click`, ( ) => {
    Swal.fire({
        title:'Excelente!',
        text: "Su turno para el fue confirmado",
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000
      })
   
})
};

