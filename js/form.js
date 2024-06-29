// Formulario de contacto

// Defino constante formulario
const formulario = document.getElementById('contacto');

// addeventListener para "escuchar" al botón submit, preventDefault para evitar la recarga.
//Se agrega ?, optional chaining, para programacion defensiva.
formulario?.addEventListener('submit', async function(event) {
  event.preventDefault();
  const data = getFormData(event.currentTarget)

  console.log(data)

  try {
    const response = await fetch('http://localhost:5000/add_contact', {
      method:'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    })
    console.log(response, 'ENTRO')
  } catch (error) {
    console.error(error)
  }
  //Campos Obligatorios
  if (nombre === '' || email === '' || mensaje === '' || numeroTelefono === '') {
    alert('Todos los campos son obligatorios');
    return;
  }
  // Enviar los datos a un servidor
  alert('Formulario enviado correctamente');
});

function getFormData(form) {
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  return data;
}

