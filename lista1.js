function mudar(){
    alert("Isso é um alerta");
}

function mudar(){
    document.getElementById("result").innerHTML = "mudou 0 <br>";
    var i;
    for (i = 1; i < 10; i++) {
        document.getElementById("result").innerHTML += "mudou " + i + "<br>";
    }
    // document.getElementById("result").innerHTML = "mudou!";
}
    