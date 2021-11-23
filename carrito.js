let productosCarrito = document.getElementById("productosCarrito")
let precioTotal = document.getElementById("precioAPagar")

/*menuMovile*/ 
const menuMovile = document.getElementsByClassName("menuMovile")
const divMovile = document.getElementsByClassName("divMovile")
const cerrarMenu = document.getElementsByClassName("botonCerrarMenu")
const navMovile = document.getElementsByClassName("navMovile")
/*menuMovile*/ 


    const mostrarCarrito = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito"))
        let monto = 0
        productosCarrito.innerHTML = ""
        if(carrito == "" || carrito == null){
            productosCarrito.innerHTML = `<div class="carritoVacio">
            <h2 class="h2CarritoVacio">¡No tienes nada agregado al carrito!</h2>
            <h2>¡Vamos de compras!</h2>
            <a href="./tienda.html"><button class="botonCarritoVacio">Tienda</button></a>
        </div>`

            precioTotal.style = "display: none;"
        }
        else{
            carrito.forEach((e, index) => {
                productosCarrito.innerHTML +=
                `<div class="productosEnCarrito">
                <img src="../productos/${e.nombre}.jpeg" alt=" "class="imgProductoCarrito">
                <h2 class="nombreProducto">${e.nombre}</h2>
                <p class="precioProducto">${e.precio}</p>
                <ion-icon name="close-outline" class="transicionVerde" onclick="borrarItem(${index})"></ion-icon>
            </div>`
            monto += e.precio
        });
            precioTotal.innerHTML = `
            <div class="precioTotal">
            <h2>El precio total a pagar es de</h2>
            <p>$${monto}</p>
            <button class="finalizarCompra" onclick="finalizarCompra()">Finalizar Compra</button>
            <button class="vaciarCarrito" onclick="vaciarCarrito()">Vaciar carrito.</button>
        </div>`
        }
    }


    const borrarItem = (index) => {
        let carrito = JSON.parse(localStorage.getItem("carrito"))
        carrito.splice(index, 1)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito()
    }

    
    const finalizarCompra = () => {
        localStorage.removeItem("carrito")
        productosCarrito.innerHTML = `
        <div class="compraFinalizada">
        <h2 class="">Compra finalizada con exito</h2>
        </div>`
        precioTotal.style = "display: none;"
    }

    const vaciarCarrito = () => {
        JSON.parse(localStorage.getItem("carrito"))
        localStorage.removeItem("carrito")
        mostrarCarrito()
    }
/*menuMovile*/ 
const cerrarMenuNav = () => {
    navMovile[0].style.animationName = "desaparicion"
    setTimeout( () =>
    {divMovile[0].style.display = "none"},1000
    )
    
  }
  
  const abrirMenu = () => {
    navMovile[0].style.animationName = "aparicion"
    divMovile[0].style.display = "flex"
  }
  
  cerrarMenu[0].addEventListener("click", cerrarMenuNav)
  
  menuMovile[0].addEventListener("click", abrirMenu)
  
  /*menuMovile*/ 


    mostrarCarrito()

    





