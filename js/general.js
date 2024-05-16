
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

//Recorrer TODOS los punto
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













//https://www.youtube.com/watch?v=2CEptqw-bSQ&ab_channel=EduardoFierro min13