const htmlCode = `
    <div class="container-fluid border text-center" id="contenedor-mensaje">
        <div class="text-center" id="mensaje">
            <h1><b>¡APRESÚRENSE!</b></h1>
            <h3>El plazo maximo para inscribirse es solo 2 días despues de la siguiente fecha:</h3>
            <h3 id="insertDate">30-12-2020</h3>
            </div>
        <div class="formulario">        
            <input type="text" class="form-control col" id="form-nombre" placeholder="Nombre">
            <input type="email" class="form-control" id="form-correo" placeholder="Correo">
            <input type="password" class="form-control" id="form-contraseña" placeholder="Contraseña">
            <button class="btn btn-primary" type="submit">Inscribirse</button>
            <p>¿Tienes cuenta? <a href="#">Inicia sesión aquí</a></p>
        </div>
    </div>      
`;

document.body.innerHTML = htmlCode;

// Obtener los elementos con los IDs  "insertDate"
const dateElement = document.getElementById("insertDate");

// Función para actualizar la hora y fecha cada segundo
function updateTime() {
    // Obtener la hora actual
    const now = new Date();

    // Obtener la fecha actual
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");

    // Actualizar el contenido del elemento "insertDate"
    dateElement.textContent = `${day}-${month}-${year}`;
}
