let producto = JSON.parse(localStorage.getItem('dataProductoVer'));
console.log(producto)

const cotainerProduct = document.querySelector('.product-contain');

cotainerProduct.innerHTML =
  `
<div class="toma">
            <img class="toma__imagen" src="${producto.imagen}" alt="imagen del producto">

            <div class="toma__contenido">
                <p class="producto__nombre">${producto.nombre}</p>
                <p class="producto__precio">$${producto.precio}</p>
                <form class="formulario">
                    <select class="formulario__campo">
                        <option disabled selected>-- Seleccionar color--</option>
                        <option>Gris</option>
                        <option>Blanca</option>
                        <option>Gris</option>
                    </select>
                    <input class="formulario__cantidad" type="number" placeholder="cantidad" min="1">
                    <a href="carrito.html" id="agregarAlCarritoBtn" class="formulario__submit" type="submit" value="Agregar al carrito" >Agregar al carrito</a>
                    <input type="text" id="finalizarCompraBtn" class="formulario__submit" type="submit" value="Finalizar compra">
                    
                    
                </form>
            </div>
        </div>
`;



let carrito = [];
// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Obtener el carrito almacenado en el almacenamiento local (localStorage)
  carrito = localStorage.getItem('carrito');

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

  

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  // Swal.fire({
  //   position: 'top-end',
  //   icon: 'success',
  //   title: 'Producto agregado',
  //   showConfirmButton: false,
  //   timer: 2000
  // })
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

const finalizarCompraBtn = document.getElementById('finalizarCompraBtn');
if (finalizarCompraBtn) {
  finalizarCompraBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el envío del formulario

    console.log(carrito);
    //Validar que se haya seleccionado un color y una cantidad
    if (carrito.length == 0) {
      alert('Por favor, selecciona un color y una cantidad');
    } else {
      // alert('Gracias por preferirnos');
      window.location.href = '../page/carrito.html';
    }
  });
}

