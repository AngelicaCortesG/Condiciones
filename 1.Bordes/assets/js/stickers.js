function calcular(){
olivia=document.querySelector('#olivia').value
walter=document.querySelector('#walter').value
peter=document.querySelector('#peter').value
cuanto=document.querySelector('span')
suma= Number(olivia) + Number(walter) + Number(peter)
    if(suma>10){
        cuanto=document.querySelector('span')
        cuanto.innerHTML = 'Llevas demasiados sticker'
        cuanto.style.color= "red"
    }
    else {
        cuanto=document.querySelector('span')
        cuanto.innerHTML= 'Llevas ' + suma + ' stickers'
        cuanto.style.color= "#39ff14"
    }
}