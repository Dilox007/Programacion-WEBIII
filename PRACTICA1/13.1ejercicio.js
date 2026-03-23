
function obtenerUsuario(){
    return new Promise(resolve=>{
        setTimeout(()=> resolve("Usuario obtenido"),1000)
    })
}

function obtenerPedidos(){
    return new Promise(resolve=>{
        setTimeout(()=> resolve("Pedidos del usuario"),1000)
    })
}

function obtenerDetalle(){
    return new Promise(resolve=>{
        setTimeout(()=> resolve("Detalle del pedido"),1000)
    })
}

async function ejecutar(){

    let usuario = await obtenerUsuario()
    console.log(usuario)

    let pedidos = await obtenerPedidos()
    console.log(pedidos)

    let detalle = await obtenerDetalle()
    console.log(detalle)

}
ejecutar()
