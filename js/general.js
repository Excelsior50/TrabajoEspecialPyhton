
//Menu Boton hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


//Carrousel Imagenes

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

//Recorrer TODOS los punto - Carrousel
punto.forEach( (cadaPunto , i) => {
    //Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        //Guardar pos de ese Punto
        let posicion = i

        //Calcular espacio desplazarse el Grande
        //operacion = posicion * -33%
        let operacion = posicion * -33

        //Movemos el Grande
        grande.style.transform = `translateX(${ operacion }%)`

        //Recorremos Todos los punto
        punto.forEach( ( cadaPunto , i )=>{
            //Quitamos la class ACTIVO a todos los punto
            punto[i].classList.remove('activo')
        })
        //Añadimos class ACTIVO en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')
    })
})

// Formulario de contacto

// Defino constante formulario
const formulario = document.getElementById('formulario');

// addeventListener para "escuchar" al botón submit, preventDefault para evitar la recarga.
formulario.addEventListener('submit', function(event) {
  event.preventDefault();

// Defino constantes
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || email === '' || mensaje === '') {
    alert('Todos los campos son obligatorios');
    return;
  }

  // Enviar los datos a un servidor
  // ...

  alert('Formulario enviado correctamente');
});

//Carga Dinamica Productos

// Carga de los datos externos
const cargarDatos = function() {
    let contenido = document.querySelector('.grillaProductos');
    fetch('.json/productos.json')
        .then(respuesta => respuesta.json())
        .then(datos => cargarProductos(contenido, datos));
}

// Modificación del HTML
function cargarProductos(contenido, datos) {
    for (let d of datos) {
        for (let i of d.imagen ) {
            let logo = document.createElement("img");
            logo.src = i.ubicacion;
            logo.alt = i.textoAlt
            logo.className = 'imgProducto';
            imagenes.appendChild(logo);
        }
        let producto = document.createElement('article');
        let nombre = document.createElement('h3');
        nombre.className = "bold";
        nombre.innerHTML = d.producto;
        let imagenes = document.createElement('div');
        imagenes.className = 'contImg'

        let precio = document.createElement('p');
        precio.innerHTML = `Precio: ${d.inicio}`

        producto.append(imagenes, nombre, precio);
        contenido.appendChild(curso);
    }
}

export { cargarDatos };




