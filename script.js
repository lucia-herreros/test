// Modo claro-oscuro

document.addEventListener('DOMContentLoaded', () => {
  const botonTema = document.getElementById('botonTema');
  const icono = botonTema.querySelector('i');

  // Mantiene el modo oscuro incluso refrescando la página
  if (localStorage.getItem('modoOscuro') === 'true') {
    document.body.classList.add('modo-oscuro');
    icono.classList.remove('bi-moon-stars-fill');
    icono.classList.add('bi-sun-fill');
  }

  botonTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    const modoOscuroActivo = document.body.classList.contains('modo-oscuro');

    if (modoOscuroActivo) {
      icono.classList.remove('bi-moon-stars-fill');
      icono.classList.add('bi-sun-fill');
      localStorage.setItem('modoOscuro', 'true');
    } else {
      icono.classList.remove('bi-sun-fill');
      icono.classList.add('bi-moon-stars-fill');
      localStorage.setItem('modoOscuro', 'false');
    }
  });
});

// Validación del formulario contacto

document.getElementById("formularioContacto").addEventListener("submit", function (event) {
    event.preventDefault();
    validar();
});

function mostrarError(id, mensaje) {
    const campo = document.getElementById(id);
    const feedback = document.getElementById("error-" + id);
    campo.classList.add("is-invalid");
    feedback.textContent = mensaje;
}

function limpiarErrores() {
    const campos = ["nombre", "apellido", "mail", "mensaje"];
    campos.forEach(id => {
        const campo = document.getElementById(id);
        campo.classList.remove("is-invalid");
        const feedback = document.getElementById("error-" + id);
        feedback.textContent = "";
    });
}

function validar() {
    limpiarErrores();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hayErrores = false;

    if (!nombre) {
        mostrarError("nombre", "Campo obligatorio");
        hayErrores = true;
    }
    if (!apellido) {
        mostrarError("apellido", "Campo obligatorio");
        hayErrores = true;
    }
    if (!mail) {
        mostrarError("mail", "Campo obligatorio");
        hayErrores = true;
    } else if (!mailValido.test(mail)) {
        mostrarError("mail", "Email inválido");
        hayErrores = true;
    }
    if (!mensaje) {
        mostrarError("mensaje", "Campo obligatorio");
        hayErrores = true;
    }

    if (hayErrores) return;

    document.getElementById("formularioContacto").reset();
    alert("Gracias por su mensaje. En breve le estaré respondiendo.");
}