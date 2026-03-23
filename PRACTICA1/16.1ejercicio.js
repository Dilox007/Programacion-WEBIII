function obtenerDatos(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Datos obtenidos correctamente")
        },2000)

    })

}

async function ejecutar(){

    let resultado = await obtenerDatos()
    console.log(resultado)

}

ejecutar()