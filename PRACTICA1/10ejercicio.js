function proceso(callback){
    setTimeout(function(){
        console.log("Proceso terminado");
        callback();
    },1000);
}

proceso(function(){
    console.log("Callback ejecutado");
});


// Ejemplo de Promesa
function tarea(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Promesa completada");
        },1000);
    });
}

tarea().then(function(resultado){
    console.log(resultado);
});