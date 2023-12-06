
const Articulo = function(nombre,precio,marca,stock){       
    this.nombre = nombre
    this.precio = precio
    this.marca = marca
    this.stock = stock
}

// creamos los articulos

let remera1 = new Articulo( "remera lisa", 13000, "adidas", 5)
let remera2 = new Articulo( "remera lisa negra", 28000, "adidas", 5)
let remera3 = new Articulo( "remera lisa", 23000, "nike", 5)
let remera4 = new Articulo( "remera lisa", 48000, "lacoste", 3)
let remera5 = new Articulo( "remera basic", 35000, "adidas", 5)
let remera6 = new Articulo( "remera over", 28000, "nike", 1)
let remera7 = new Articulo( "remera lisa basic", 32000, "lacoste", 5)
let remera8 = new Articulo( "remera estampada", 48000, "adidas", 10)
let remera9 = new Articulo( "remera free", 15000, "adidas", 8)
let remera0 = new Articulo( "remera corte v", 38000, "adidas", 5)
let jean1 = new Articulo( "jean cargo", 28000, "adidas", 5)
let jean2 = new Articulo( "cargo negro", 28000, "adidas", 15)
let jean3 = new Articulo( "jean slim", 28000, "adidas", 2)
let jean4 = new Articulo( "jean regular", 28000, "adidas", 5)
let jean5 = new Articulo( "jean loose", 28000, "adidas", 5)


//creacion de mi array con los articulos generados

let lista = [
    remera1,
    remera2,
    remera3,
    remera4,
    remera5,
    remera6,
    remera7,
    remera8,
    remera9,
    remera0,
    jean1,
    jean2,
    jean3,
    jean4,
    jean5
]

//localstorage
if(localStorage.getItem("articulo")){
    lista = JSON.parse(localStorage.getItem("articulo"))
}else{
    lista = lista
}



function filtrarArticulo(){
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter((articulo) => articulo.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){

        const container = document.createElement("div")

        resultado.forEach( (Articulo) =>{
            const card = document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `articulo: ${Articulo.nombre}`
        card.appendChild(nombre)

        const precio = document.createElement("h3")
        precio.textContent =`precio: ${Articulo.precio}` 
        card.appendChild(precio)

        const marca = document.createElement("h3")
        marca.textContent = `marca: ${Articulo.marca}`
        card.appendChild(marca)

        const stock = document.createElement("h3")
        stock.textContent = `disponibilidad: ${Articulo.stock}`
        card.appendChild(stock)

        container.appendChild(card)

        })

        body.appendChild(container)


    }else{
       alert("no hay coincidencia") 
    }
}




const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.addEventListener("click",filtrarArticulo)

