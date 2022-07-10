function calcular() {
    select1 = document.querySelector('#select-1')
    select2 = document.querySelector('#select-2')
    select3 = document.querySelector('#select-3')
    span = document.querySelector('span')
    if (select1.value == 9 && select2.value == 1 && select3.value == 1) {
        span = document.querySelector('span')
        span.innerHTML = 'Password 1 correcto'
        span.style.color= "green"
    } else if (select1.value == 7 && select2.value == 1 && select3.value == 4) {
        span = document.querySelector('span')
        span.innerHTML = 'Password 2 correcto'
        span.style.color= "green"
    } else {
        span = document.querySelector('span')
        span.innerHTML = 'Password 1 correcto'
        span.style.color= "red"
    }
}