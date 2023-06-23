// Obtener referencia al botón de agregar al carrito
const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');

// Event listeners para los botones de agregar al carrito
agregarCarritoButtons.forEach((button) => {
  button.addEventListener('click', agregarAlCarrito);
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  const producto = event.target.closest('.producto'); // Obtener el elemento padre 'producto'
  const nombreProducto = producto.querySelector('.producto__nombre').textContent;
  const precioProducto = producto.querySelector('.producto__precio').textContent;

  // Crear un objeto de producto con los datos obtenidos
  const nuevoProducto = {
    nombre: nombreProducto,
    precio: precioProducto,
  };

  // Agregar el producto al carrito (guardarlo en localStorage o enviarlo al servidor, según tus necesidades)
  // Ejemplo: localStorage

  // Redireccionar a la página del carrito de compras
  window.location.href = 'carrito.html';
}






