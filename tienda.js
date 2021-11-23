class Productos{
    constructor(marca, nombre, precio){
        this.marca = marca,
        this.nombre = nombre,
        this.precio = precio
    }
}


const morphosis1 = new Productos ("morphosis", "Shampoo Repair", 25)
const morphosis2 = new Productos ("morphosis", "Acondicionador Repair", 23)
const morphosis3 = new Productos ("morphosis", "Serum Repair", 10)
const morphosis4 = new Productos ("morphosis", "Tratamiento Repair", 17)
const morphosis5 = new Productos ("morphosis", "Shampoo Color Protect", 20)
const morphosis6 = new Productos ("morphosis", "Acondicionador Color Protect", 30)
const morphosis7 = new Productos ("morphosis", "Tratamiento Color Protect", 12)
const morphosis8 = new Productos ("morphosis", "Serum Restructure", 14)
const morphosis9 = new Productos ("morphosis", "Acondicionador Restructure", 15)
const morphosis10 = new Productos ("morphosis", "Shampoo Restructure", 16)


const seccionProductos = document.getElementById("imprimirTienda")
const carrito = document.getElementById("carritoBoton")
const cerrarCarrito = document.getElementById("cerrarCarrito")
const mostrarCarrito = document.getElementById("carrito")
const productosCarritoBoton = document.getElementById("productosCarritoBoton")
const precioCarritoDiv = document.getElementById("precioCarritoBoton")
const carritoBotones = document.getElementById("botones")
const vaciarCarritoBoton = document.getElementsByClassName("vaciarCarritoBoton")
const finalizarCompraBoton = document.getElementsByClassName("finalizarCompraCarritoBoton")
const body = document.getElementsByTagName("body")
const tienda = document.getElementsByClassName("tienda")
const header = document.getElementsByTagName("header")
/*menuMovile*/ 
const menuMovile = document.getElementsByClassName("menuMovile")
const divMovile = document.getElementsByClassName("divMovile")
const cerrarMenu = document.getElementsByClassName("botonCerrarMenu")
const navMovile = document.getElementsByClassName("navMovile")
/*menuMovile*/ 



const productosTienda = [morphosis1, morphosis2,morphosis3, morphosis4, morphosis5, morphosis6, morphosis7, morphosis8, morphosis9, morphosis10]

    finalizarCompraBoton[0].addEventListener("click",  () => {
        localStorage.removeItem("carrito")
        productosCarritoBoton.innerHTML = `<div class="compraFinalizada">
        <h2>¡Compra finalizada con exito!</h2>
        </div>`

        precioCarritoDiv.style.display = 'none'
        carritoBotones.style.display = 'none'
        carrito.style.flexDirection = 'unset'
    })

    vaciarCarritoBoton[0].addEventListener("click", () => {
    vaciarCarrito()
    })


    mostrarCarrito.addEventListener("click", () => {
        imprimirCarritoBoton()
        carrito.style.animationName = 'carrito'
        carrito.style.display = 'flex'
        tienda[0].classList.toggle('opacidad')
        header[0].classList.toggle('opacidad')
        carrito.style.opacity = '1'
    }) 


    cerrarCarrito.addEventListener("click", () => {
        body[0].style.opacity = '1'
        carrito.style.animationName = 'cerrarCarrito'
        tienda[0].classList.toggle('opacidad')
        header[0].classList.toggle('opacidad')
        setTimeout(animacionCarrito, 600)
    })


const animacionCarrito = () => {
    carrito.style.display = 'none'
}

const imprimirProductos = () => {

    productosTienda.forEach (element =>{
        index = productosTienda.indexOf(element)
    

        seccionProductos.innerHTML += `<div class="productos">
        <img src="../productos/${element.nombre}.jpeg" alt="${element.nombre}" class="imgProducto" onmouseover="this.src='../productos/${element.nombre} (1).jpeg'" onmouseleave="this.src='../productos/${element.nombre}.jpeg'">
        <h3 class="nombreProducto">${element.nombre}</h3>
        <p class="precioProducto">$${element.precio}</p>
        <button class="botonProducto" onclick="comprar(${index})">Comprar</button>
    </div>`
    })
}   

const imprimirCarritoBoton = () => {
    let monto = 0
    
    let traerDatos = JSON.parse(localStorage.getItem("carrito", carrito))

    productosCarritoBoton.innerHTML = ""

    if(traerDatos == "" || traerDatos == null){
        productosCarritoBoton.innerHTML = `
        <div class="carritoBotonVacio">
        <h2>¡No hay nada disponible en el carrito!</h2>
    </div>
    `
    precioCarritoDiv.style.display = 'none'
    carritoBotones.style.display = 'none'
    carrito.style.flexDirection = 'unset'
    }else{
        carrito.style.flexDirection = 'column'
        precioCarritoDiv.style.display = 'flex'
        carritoBotones.style.display = 'flex'
    traerDatos.forEach((e, index) => {
        productosCarritoBoton.innerHTML += `<div class="productoCarritoBoton">
        <img src="../productos/${e.nombre}.jpeg" alt="${e.nombre}">
        <h2>${e.nombre}</h2>
        <ion-icon name="close-outline" class="transicionVerde" onclick="borrarItem(${index})"></ion-icon>
    </div>`
    monto += e.precio
        })

        document.getElementById("precioCarrito").textContent =  monto
    }
}


const comprar = (index) => {
    let carrito
    if(localStorage.getItem("carrito") == null){
        carrito = []
    }else{
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(productosTienda[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
    imprimirCarritoBoton()
}

const borrarItem = (index) => {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    carrito.splice(index, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    imprimirCarritoBoton()
}

const vaciarCarrito = () => {
    JSON.parse(localStorage.getItem("carrito"))
    localStorage.removeItem("carrito")
    imprimirCarritoBoton()
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


imprimirProductos()