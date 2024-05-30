// punto 2
let personalInfo = [];

// punto 3
const guardarInformacion = (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const recordar = document.getElementById('recordar').value

    // ...punto 3
    const nuevaInfo = {
        nombre,
        direccion,
        email,
        recordar: recordar || ''
    };

    // ...punto 3
    personalInfo.push(nuevaInfo);

    document.getElementById('personalInfoForm').reset();

    mostrarInformacion();

    // punto 4
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
}

const mostrarInformacion = () => {
    const infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = '';

    personalInfo.forEach((info, index) => {
        const div = document.createElement('div');
        div.classList = 'divItem'
        div.innerHTML = `
            <p><strong>Nombre:</strong> ${info.nombre}</p>
            <p><strong>Dirección:</strong> ${info.direccion}</p>
            <p><strong>Correo electrónico:</strong> ${info.email}</p>
            <p><strong>Recordar:</strong> ${info.recordar}</p>
            <button onclick="eliminarInformacion(${index})">Eliminar</button>
        `;
        infoContainer.appendChild(div);
    });
}

// punto 6
const eliminarInformacion = (index) => {
    personalInfo.splice(index, 1);
    mostrarInformacion();
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
}

// punto 5
document.addEventListener('DOMContentLoaded', () => {
    const storedInfo = localStorage.getItem('personalInfo');
    if (storedInfo) {
        personalInfo = JSON.parse(storedInfo);
        mostrarInformacion();
    }
});

document.getElementById('personalInfoForm').addEventListener('submit', guardarInformacion);
mostrarInformacion();