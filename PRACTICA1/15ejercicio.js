function leerDatos(callback){

    setTimeout(()=>{
        callback("Datos obtenidos")
    },1000)

}

function leerDatosPromesa(){

    return new Promise(resolve=>{
        leerDatos(resolve)
    })

}

leerDatosPromesa().then(console.log)