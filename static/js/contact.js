// Formulario de contacto

// Defino constante formulario
const formulario = document.getElementById('formulario');

// addeventListener para "escuchar" al botón submit, preventDefault para evitar la recarga.
//Se agrega ?, optional chaining, para programacion defensiva.
formulario?.addEventListener('submit', function(event) {
  event.preventDefault();

// Defino constantes
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  const numeroTelefono = document.getElementById('numeroTelefono').value;
  const domicilio = document.getElementById('domicilio').value;

  if (nombre === '' || email === '' || mensaje === '' || domicilio === '' || numeroTelefono === '') {
    alert('Todos los campos son obligatorios');
    return;
  }

  // Enviar los datos a un servidor
  // ...

  alert('Formulario enviado correctamente');
});


