var lamp = document.getElementById('apagada')
var liga = document.getElementById('liga')
var desliga = document.getElementById('desliga')

function Ajuste() {
   return lamp.src.indexOf('lampada-quebrada') > -1
}

function Ligar() {
    if (!Ajuste()) {
    lamp.src = `img/lampada-acesa.svg`}
}

function Desligar() {
    if (!Ajuste()) {
    lamp.src = `img/lampada-apagada.svg`}
}

function Quebrar(){
    if (!Ajuste()) {
    lamp.src = `img/lampada-quebrada.svg`
    window.alert("Lampada Quebrada , Atualize a Pagina.")}
}


lamp.addEventListener('click', Quebrar)
liga.addEventListener('click', Ligar)
desliga.addEventListener('click', Desligar)