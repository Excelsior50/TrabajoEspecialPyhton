document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('.elemento');
  
    elementos.forEach(elemento => {
      elemento.addEventListener('click', function(event) {
        event.preventDefault();
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('active');
      });
    });
  });
  