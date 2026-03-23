function paso1(){
    return Promise.resolve("Paso 1 completado")
}

function paso2(){
    return Promise.resolve("Paso 2 completado")
}

paso1()
.then(res=>{
    console.log(res)
    return paso2()
})
.then(res=>{
    console.log(res)
})