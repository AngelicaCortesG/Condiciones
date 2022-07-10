function calcular(){
olivia=document.querySelector('#olivia').value
walter=document.querySelector('#walter').value
peter=document.querySelector('#peter').value
cuanto=document.querySelector('span')
suma= Number(olivia) + Number(walter) + Number(peter)
    if(suma>10){
        cuanto=document.querySelector('span').textContent = 'Llevas demasiados sticker'
    }
    else {
        cuanto=document.querySelector('span')
        cuanto.innerHTML= 'Llevas ' + suma + ' stickers'
    }
}