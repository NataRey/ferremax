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
    const colorSelect = document.querySelector('.formulario__campo--color');
    const cantidadInput = document.querySelector('.formulario__campo--cantidad');

    const colorSeleccionado = colorSelect.value;
    const cantidadSeleccionada = cantidadInput.valueAsNumber;

    // Validar que se haya seleccionado un color y una cantidad
    if (colorSeleccionado && cantidadSeleccionada) {
      // Crear objeto de producto con los datos seleccionados
      const producto = {
        color: colorSeleccionado,
        cantidad: cantidadSeleccionada
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

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Obtener el carrito almacenado en el almacenamiento local (localStorage)
  let carrito = localStorage.getItem('carrito');

  if (carrito) {
    // Si el carrito ya existe en el almacenamiento local, convertirlo de JSON a objeto
    carrito = JSON.parse(carrito);
  } else {
    // Si el carrito no existe, crear un nuevo array vacío
    carrito = [];
  }

  // Agregar el producto al carrito
  carrito.push(producto);

  // Guardar el carrito actualizado en el almacenamiento local
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para mostrar un mensaje al usuario
function mostrarMensaje(mensaje, tipo) {
  const mensajeElement = document.createElement('div');
  mensajeElement.classList.add('mensaje', `mensaje--${tipo}`);
  mensajeElement.textContent = mensaje;

  const contenedor = document.querySelector('.contenedor');
  contenedor.appendChild(mensajeElement);

  // Desaparecer el mensaje después de 3 segundos
  setTimeout(() => {
    mensajeElement.remove();
  }, 3000);
}