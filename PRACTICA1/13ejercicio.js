function obtenerUsuario(){

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Usuario obtenido")
        },1000)
    })

}

function obtenerPedidos(){

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Pedidos del usuario")
        },1000)
    })

}

function obtenerDetalle(){

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Detalle del pedido")
        },1000)
    })

}

obtenerUsuario()
.then(usuario => {
    console.log(usuario)

    obtenerPedidos()
    .then(pedidos => {
        console.log(pedidos)

        obtenerDetalle()
        .then(detalle => {
            console.log(detalle)
        })

    })

})