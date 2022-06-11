let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('restar')) {
      contador--;
    }
    else if(estilos.contains('sumar')) {
      contador++;
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;

      // Cambio de color

      if(contador > 0) {
        valor.style.color = '#31f02e';
      }
      if(contador < 0) {
        valor.style.color = '#f40000  ';
     }
     if(contador == 0) {
      valor.style.color = '#000000  ';
   }

  })
})