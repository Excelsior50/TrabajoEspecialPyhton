
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



//Carga Dinamica Productos

// Carga de los datos externos

//Promesa cargar json, si no carga, consologea Error y no rompe el sitio
async function getProducts() {
    try {
      const response = await fetch('/json/productos.json');
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
}

// Modificación del HTML
const renderProducts = function(products) {
    const gridProducts = document.getElementById("gridProducts");
    gridProducts.innerHTML = "";
    //Recorremos cada product of the array of productos.json
    products.forEach(product => {
      //Modelamos el html
        const productCard = document.createElement("article");
        productCard.className = "cardProduct";
        productCard.innerHTML = `
            <div class = "cardPlaceholder" >
                <img src=${product.img.src} alt=${product.img.alt} />
            </div>
            <div class = "cardDescription" >
                <h2>${product.title}</h2>
                <span>${product.price}</span>
            </div>
        `
        gridProducts.appendChild(productCard);
    })    
}

//Evento para ejecutar todo una vez carga el DOM
document.addEventListener("DOMContentLoaded", async ()=>{
    const products = await getProducts();
    renderProducts(products);
})
