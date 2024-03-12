var modoCifrado = true;

function cifrarTexto() {
    var texto = document.getElementById("mensaje").value.toLowerCase();
    
    if (texto === '') {
        document.querySelector(".textoVacio").style.display = "block";
        document.querySelector(".ingresaTexto").style.display = "block";
        return;
    }
    
    document.querySelector(".textoVacio").style.display = "none";
    document.querySelector(".ingresaTexto").style.display = "none"; 
    var textoCifrado = "";
    for (var i = 0; i < texto.length; i++) {
        var char = texto.charAt(i);
        switch (char) {
            case "e":
                textoCifrado += "enter";
                break;
            case "i":
                textoCifrado += "imes";
                break;
            case "a":
                textoCifrado += "ai";
                break;
            case "o":
                textoCifrado += "ober";
                break;
            case "u":
                textoCifrado += "ufat";
                break;
            default:
                textoCifrado += char;
        }
    }
    document.getElementById("textoCifrado").innerText = textoCifrado;
    document.getElementById("textoDescifrado").innerText = "";
    document.getElementById("imagen").style.display = "none"; 
    document.getElementById("copiaTexto").style.display = "block"; 
    document.getElementById("copiaTexto").innerText = "Copiar"; 
    modoCifrado = true;
}

function descifrarTexto() {
    var texto = document.getElementById("mensaje").value.toLowerCase();
    if (texto === '') {
        document.querySelector(".textoVacio").style.display = "block";
        document.querySelector(".ingresaTexto").style.display = "block";
        return;
    }
    
    document.querySelector(".textoVacio").style.display = "none"; 
    document.querySelector(".ingresaTexto").style.display = "none"; 
    var textoDescifrado = "";
    if (modoCifrado) {
        var textoCifrado = document.getElementById("textoCifrado").innerText;
        textoDescifrado = textoCifrado
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
    } else {
        textoDescifrado = texto;
    }
    document.getElementById("textoDescifrado").innerText = textoDescifrado;
    document.getElementById("textoCifrado").innerText = ""; 
    document.getElementById("imagen").style.display = "none"; 
    document.getElementById("copiaTexto").style.display = "block"; 
    document.getElementById("copiaTexto").innerText = "Copiar"; 
    modoCifrado = false;
}

function copiarTexto() {
    var textoCifrado = document.getElementById("textoCifrado").innerText;
    var textoDescifrado = document.getElementById("textoDescifrado").innerText;

    var textoCopiado = textoCifrado + " " + textoDescifrado;

    
    var input = document.createElement('input');
    input.setAttribute('value', textoCopiado);
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    document.getElementById("copiaTexto").innerText = "¡Texto Copiado!";
}