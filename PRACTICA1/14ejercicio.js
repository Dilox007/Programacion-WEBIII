function obtenerMensaje(){

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Mensaje obtenido")
        },2000)
    })

}

function usarCallback(callback){

    obtenerMensaje()
    .then(res=>{
        callback(res)
    })

}

usarCallback(function(resultado){
    console.log(resultado)
})