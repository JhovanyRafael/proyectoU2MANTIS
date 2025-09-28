

const inpNombre = document.getElementById('input-nombre');
const inpEmail = document.getElementById('input-email');
const inpMensaje = document.getElementById('input-mensaje');

async function enviardatos()
{
const nombre=inpNombre.value;
const email=inpEmail.value;
const mensaje=inpMensaje.value;

if (!nombre || !email || !mensaje )
{
    alert('Por favor rellene todos los campos');
    return;
}

alert('Datos enviados correctamente');
document.getElementById('input-nombre').value = "";
  document.getElementById('input-email').value = "";
  document.getElementById('input-mensaje').value = "";
  
  }
  

// Funcionalidad de compra en la tienda
document.querySelectorAll('.boton-comprar').forEach(function(boton) {
  boton.addEventListener('click', function() {
    const producto = this.parentElement.querySelector('h4').textContent;
    alert('Has comprado: ' + producto);
    // Aquí puedes agregar lógica para carrito, pago, etc.
  });
});


  



