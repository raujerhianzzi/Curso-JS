let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function innumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }

}
function inlista(n){
    if(l.indexof(number(n)) != -1){
        return true
    }else {
        return false
    }


}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value)) {
        alert('Tudo ok')
    }else {
        alert('Valor Invalido ou ja encontrado na lista.')
    }
}