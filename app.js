

//////////////////
//////////////////
//////////////////
//////////////////
//////////////////

/*CARRITO BOTON*/
const carrito = document.getElementById("carritoBoton")
const cerrarCarrito = document.getElementById("cerrarCarrito")
const mostrarCarrito = document.getElementById("carrito")
const productosCarritoBoton = document.getElementById("productosCarritoBoton")
const precioCarritoDiv = document.getElementById("precioCarritoBoton")
const carritoBotones = document.getElementById("botones")
const vaciarCarritoBoton = document.getElementsByClassName("vaciarCarritoBoton")
const finalizarCompraBoton = document.getElementsByClassName("finalizarCompraCarritoBoton")
const header = document.getElementsByTagName("header")
const section = document.getElementsByTagName("section")
const carruselImg = document.getElementById("imgCarrusel")

/*menuMovile*/ 
const menuMovile = document.getElementsByClassName("menuMovile")
const divMovile = document.getElementsByClassName("divMovile")
const cerrarMenu = document.getElementsByClassName("botonCerrarMenu")
const navMovile = document.getElementsByClassName("navMovile")
/*menuMovile*/ 

/*Carrousel*/
let carrusel = 1
/*Carrousel*/


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
  section[0].classList.toggle('opacidad')
  section[1].classList.toggle('opacidad')
  section[2].classList.toggle('opacidad')
  carrito.style.animationName = 'carrito'
  carrito.style.display = 'flex'
  header[0].classList.toggle('opacidad')
}) 


cerrarCarrito.addEventListener("click", () => {
  carrito.style.animationName = 'cerrarCarrito'
  section[0].classList.toggle('opacidad')
  section[1].classList.toggle('opacidad')
  section[2].classList.toggle('opacidad')
  header[0].classList.toggle('opacidad')
  setTimeout(animacionCarrito, 600)
})


const animacionCarrito = () => {
  carrito.style.display = 'none'
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
      <img src="./productos/${e.nombre}.jpeg" alt="${e.nombre}">
      <h2>${e.nombre}</h2>
      <ion-icon name="close-outline" class="transicionVerde" onclick="borrarItem(${index})"></ion-icon>
      </div>`
      monto += e.precio
    })
    
    document.getElementById("precioCarrito").textContent =  monto
  }
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


/*Carrito boton*/


///////API GOOGLE
function iniciarMap(){
    let coord = {lat:-34.5956145 ,lng: -58.4431949};
    let map = new google.maps.Map(document.getElementById('apiGoogle'),{
      zoom: 10,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

///////// API GOOGLE





/*CARRUSEL*/ 




const carruselFuncion = () => {

  $("#imgCarrusel").fadeOut(500, () => {
    
    carrusel++
  
    if(carrusel == 6 ){
      carrusel = 1
    }
    $("#imgCarrusel").attr("src", `./carrousel/carrousel (${carrusel}).jpeg`)
  })

  

  $("#imgCarrusel").fadeIn(500)

}

setInterval(carruselFuncion, 4000)


/*CARRUSEL*/ 
