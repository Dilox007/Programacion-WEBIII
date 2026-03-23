function obtenerDatos(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Datos obtenidos correctamente")
        },2000)

    })

}

obtenerDatos()
.then(resultado => {
    console.log(resultado)
})