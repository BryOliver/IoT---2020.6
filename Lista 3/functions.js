function acender(id){
    var img = document.getElementById(id);
    img["src"] = "img/Lon.png"
    sendToServer(1000)
}

function apagar(id){
    var img = document.getElementById(id);
    img["src"] = "img/Loff.png"
    sendToServer(200)
}

function sendToServer(state){
    var KEY = "AJGT3RJLIHIQP8LL&field1";
    //criar um objeto capaz de enviar dados via requisição HTTP GET
    const http = new XMLHttpRequest();
    //prepara um GET passando a váriavel lux como ultimo paramentro do link
    http.open("GET", " https://api.thingspeak.com/update?api_key="+ KEY +"=0"+state);
    //envia um GET
    http.send();
    //quando a requisição retornar ele chama o console e imprime o valor gerado
    http.onload = console.log(http.responseText+" "+state)   
} 