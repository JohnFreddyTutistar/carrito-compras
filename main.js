const carrito = document.querySelector("#carrito")
const template = document.querySelector(".template")
const fragment = document.createDocumentFragment()
const btnFrutas = document.querySelectorAll(".card .btn")

const carritoObjeto = [];

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }
    const indice = carritoObjeto.findIndex(
        (item) => item.id === producto.id
    )

    console.log(indice)

    if(indice == -1){
        carritoObjeto.push(producto)
    } else{
        carritoObjeto[indice].cantidad ++
    }

    console.log(carritoObjeto)

    pintarCarrito(carritoObjeto)
    //console.log(carritoObjeto)
};

const pintarCarrito = (array) => {

    carrito.textContent = ""
    
    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector(".lead").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad

        fragment.appendChild(clone)
    });

    carrito.appendChild(fragment)

};

btnFrutas.forEach(btn => btn.addEventListener("click", agregarAlCarrito))


