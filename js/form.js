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
    const response = await fetch('https://excelsior5.pythonanywhere.com/add_contact', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    })
    console.log(response, 'ENTRO ADD')
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

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('buscar-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('emailSearch').value;
  
  try {
      const response = await fetch('https://excelsior5.pythonanywhere.com/buscar', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
      });

      if (!response.ok) {
          throw new Error(`Network response was not ok ${response.statusText}`);
      }

      const data = await response.json();
      const resultadosDiv = document.getElementById('resultados');
      resultadosDiv.innerHTML = '';

      if (data.length > 0) {
          const table = document.createElement('table');
          const header = table.insertRow();
          header.innerHTML = '<th>NroConsulta</th><th>Nombre</th><th>Correo Electrónico</th><th>Número de Teléfono</th><th>Mensaje</th><th>Acciones</th>';
          data.forEach(usuario => {
              const row = table.insertRow();
              row.innerHTML = `
                  <td>${usuario.id}"</td>
                  <td><input type="text" value="${usuario.nombre}" required></td>
                  <td>${usuario.email}</td>
                  <td><input type="tel" value="${usuario.numeroTelefono}" required></td>
                  <td><textarea required>${usuario.mensaje}</textarea></td>
                  <td>
                      <button type="submit" onclick="modificarUsuario('${usuario.id}', '${usuario.email}', this)">Modificar</button>
                      <button type="submit" onclick="eliminarUsuario('${usuario.id}', this)">Eliminar</button>
                  </td>
              `;
          });
          resultadosDiv.appendChild(table);
      } else {
          resultadosDiv.innerHTML = '<p>No se encontraron resultados.</p>';
      }
  } catch (error) {
      console.error('Error:', error);
  }
});
});

async function modificarUsuario(id, email, button) {
  // Lógica para modificar el usuario
  console.log('Modificando consulta:', id);
  const row = button.closest('tr');
  const nombre = row.querySelector('input[type="text"]').value;
  const numeroTelefono = row.querySelector('input[type="tel"]').value;
  const mensaje = row.querySelector('textarea').value;
  try {
      const response = await fetch('https://excelsior5.pythonanywhere.com/modificar', {
          method: 'POST',
          //mode: 'no-cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({id, nombre, email, numeroTelefono, mensaje })
      });
      const envio = await response.json();
      console.log(envio.id)
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      alert('Usuario modificado exitosamente');
  } catch (error) {
      console.error('Error:', error);
  }
}



async function eliminarUsuario(id, button) {
  try {
    console.log('ELIMINANDO consulta:', id);
    const response = await fetch('https://excelsior5.pythonanywhere.com/eliminar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });

      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      alert('Usuario eliminado exitosamente');
      document.getElementById('buscar-form').submit();
  } catch (error) {
      console.error('Error:', error);
  }
}