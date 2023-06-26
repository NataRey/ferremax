// Event listener para el botón "Seguir comprando"
const seguirComprandoBtn = document.getElementById('seguirComprandoBtn');
if (seguirComprandoBtn) {
  seguirComprandoBtn.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redireccionar a la página principal para seguir comprando
  });
}

// Event listener para el botón "Agregar al carrito"
const agregarAlCarritoBtn = document.getElementById('agregarAlCarritoBtn');
if (agregarAlCarritoBtn) {
  agregarAlCarritoBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos del formulario
    const colorSelect = document.querySelector('.formulario__campo');
    const cantidadInput = document.querySelector('.formulario__cantidad');

    const colorSeleccionado = colorSelect.value;
    const cantidadSeleccionada = cantidadInput.valueAsNumber;

    // Validar que se haya seleccionado un color y una cantidad
    if (colorSeleccionado && cantidadSeleccionada) {
      // Crear objeto de producto con los datos seleccionados
      let productover = JSON.parse(localStorage.getItem('dataProductoVer'));
      const producto = {
        id: productover.id,
        nombre: productover.nombre,
        precio: productover.precio,
        imagen: productover.imagen,
        
        color: colorSeleccionado,
        cantidad: cantidadSeleccionada,
      };

      // Agregar el producto al carrito
      agregarAlCarrito(producto);

      // Limpiar los campos del formulario
      colorSelect.selectedIndex = 0;
      cantidadInput.value = '';

      // Mostrar mensaje de éxito al usuario
      mostrarMensaje('Producto agregado al carrito', 'success');
    } else {
      // Mostrar mensaje de error al usuario si no se seleccionaron color y cantidad
      mostrarMensaje('Por favor, selecciona un color y una cantidad', 'error');
    }
  });
}

let productosCarrito = localStorage.getItem('carrito');
productosCarrito = JSON.parse(productosCarrito);
let tbody = document.querySelector('#tbody');

let carritoStr = '';
const divProduct = document.createElement('div');

const rednderizarProductos = () => {
  let i = 0;
  productosCarrito.forEach((product) => {
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="row">${product.id}</th>
    <td>${product.nombre}</td>
    <td>
        <image  src = '${product.imagen}'></image>
    </td>
    <td>${product.precio}</td>
    <td>${product.cantidad}</td>
    <td>${product.cantidad * product.precio}</td>
    <td ><i id ="${i}" i class=" producto__eliminar bi bi-trash"></i></td>

    `;

    tbody.append(tr)
    console.log(product);
    i++
    
  });
  actualizarBotonesEliminar();
  
}
rednderizarProductos()

function actualizarBotonesEliminar() {
  let botonesEliminar = document.querySelectorAll('.producto__eliminar');
  botonesEliminar.forEach((boton) => {
    boton.addEventListener('click', eliminarDelCarrito);
  });
}


function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  productosCarrito.splice(idBoton, 1);
  localStorage.setItem('carrito', JSON.stringify(productosCarrito));
  window.location.reload();

  console.log(idBoton);
  
}


/* ---------------------------------- total --------------------------------- */
const totalCompra = document.querySelector('.totalCompra');

let totalValorCompra = 0;

productosCarrito.forEach(producto => {
  totalValorCompra += producto.precio * producto.cantidad
  
});
totalCompra.innerHTML = `<p>${totalValorCompra}</p>`


/* ------------------------------- fin compra ------------------------------- */
const fincompra = () => {

  
  vaciarCarrito()
  window.location.href='/index.html'
}

/* ------------------------- vaciar todo el carrito ------------------------- */
const vaciarCarrito = () => {
  while (productosCarrito.length) {
    productosCarrito.splice(0, productosCarrito.length);
    localStorage.setItem('carrito', JSON.stringify(productosCarrito))
  }
  
  window.location.reload();
  
}

