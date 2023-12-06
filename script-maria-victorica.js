function enviarEncuesta() {
    // Obtener valores del formulario
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;

    // Crear objeto con datos
    var datos = {
        edad: edad,
        sexo: sexo,
        educacion: educacion,
        ocupacion: ocupacion
    };

    // Guardar datos en localStorage para acceder desde la página de resultado
    localStorage.setItem('encuestaDatos', JSON.stringify(datos));

    // Redirigir a la página de resultado
    window.location.href = 'resultados-maria-victorica.html';
}

// Función para mostrar datos en la página de resultado
function mostrarResultado() {
    // Obtener datos almacenados en localStorage
    var datosGuardados = localStorage.getItem('encuestaDatos');

    // Verificar si hay datos almacenados
    if (datosGuardados) {
        var datos = JSON.parse(datosGuardados);

        // Mostrar datos en la página
        var resultadoDiv = document.getElementById('resultadoDatos');
        resultadoDiv.innerHTML = `
            <p><strong>Edad:</strong> ${datos.edad}</p>
            <p><strong>Sexo:</strong> ${datos.sexo}</p>
            <p><strong>Nivel de Educación:</strong> ${datos.educacion}</p>
            <p><strong>Ocupación:</strong> ${datos.ocupacion}</p>
        `;
    }
}