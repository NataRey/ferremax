// Obtener referencia al botón de agregar al carrito
const agregarCarritoButtons = document.querySelectorAll('agregarAlCarritoBtn');

// Event listeners para los botones de agregar al carrito
agregarCarritoButtons.forEach((button) => {
  button.addEventListener('click', agregarAlCarrito);
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  const producto = event.target.closest('.producto'); // Obtener el elemento padre 'producto'
  const nombreProducto =
    producto.querySelector('.producto__nombre').textContent;
  const precioProducto =
    producto.querySelector('.producto__precio').textContent;

  // Crear un objeto de producto con los datos obtenidos
  const nuevoProducto = {
    nombre: nombreProducto,
    precio: precioProducto,
  };
  // Obtener el carrito actual del localStorage
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Agregar el nuevo producto al carrito
  carrito.push(nuevoProducto);

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Agregar el producto al carrito (guardarlo en localStorage o enviarlo al servidor, según tus necesidades)
  // Ejemplo: localStorage

  // Redireccionar a la página del carrito de compras
  window.location.href = 'carrito.html';
}

//renderisar todos los productos en el html
const grid = document.querySelector('#grid');
let catalogo = '';
data.forEach((product) => {
  catalogo += `
  <div class="producto" onclick="guardarInformacion(${product.id})" >
  
      <img class="producto__imagen" src="${product.imagen}" alt="Aparato Eléctrico">
      <div class="producto__informacion">
          <p class="producto__nombre">${product.nombre}</p>
          <p class="producto__precio">${product.precio}</p>
      </div>
      
  
  </div>`;
});

grid.innerHTML = catalogo;

const producto = document.querySelectorAll('.producto');

const img = document.querySelector('.producto__imagen');
const nombre = document.querySelector('.producto__nombre');

let dataProductoVer = {};

function guardarInformacion(id) {
  let index = data.findIndex((producto) => producto.id == id);
  dataProductoVer = data[index];
  console.log(dataProductoVer);
  localStorage.setItem('dataProductoVer', JSON.stringify(dataProductoVer));

  window.location.href = 'producto.html';
}
