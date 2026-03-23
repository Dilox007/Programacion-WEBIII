setTimeout(()=>{
    console.log("Paso 1")

    setTimeout(()=>{
        console.log("Paso 2")

        setTimeout(()=>{
            console.log("Paso 3")
        },1000)

    },1000)

},1000)