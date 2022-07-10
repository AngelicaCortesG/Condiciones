
// Opcion1
    boton=document.querySelector('#btn')
    img=document.querySelector('#img')
    boton1= "Agregar Bordes"
    function calcular() {
    if(boton1=="Agregar Bordes"){
        boton=document.querySelector('#btn').textContent = "Quitar Bordes"
        img.style.border ="solid 2px red"
        boton1="cambio variable"
    }   else {
        boton=document.querySelector('#btn').textContent = "Agregar Bordes"
        img.style.border ="none"
        boton1= "Agregar Bordes"
    }  
} 

// Opción 2
//     boton=document.querySelector('#btn')
    //     img=document.querySelector('#img')
    //     cuenta=0
    //     function calcular() {
    //     if(cuenta==0){
    //         boton=document.querySelector('#btn').textContent = "Quitar Bordes"
    //         img.style.border ="solid 2px red"
    //         cuenta=1
    //     }   else {
    //         boton=document.querySelector('#btn').textContent = "Agregar Bordes"
    //         img.style.border ="none"
    //         cuenta=0
    //     }  
    // }

    // Opción 3
    //     boton=document.querySelector('#btn')
    //     img=document.querySelector('#img')
    //     factor="agregar bordes"
    //     function calcular() {
    //     if(factor=="agregar bordes"){
    //         boton=document.querySelector('#btn').textContent = "Quitar Bordes"
    //         img.style.border ="solid 2px red"
    //         factor="quitar bordes"
    //     }   else {
    //         boton=document.querySelector('#btn').textContent = "Agregar Bordes"
    //         img.style.border ="none"
    //         factor="agregar bordes"
    //     }  
    // } 