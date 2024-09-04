document.addEventListener("DOMContentLoaded", function() {
    // Ocultar el botón de copiar al cargar la página
    document.getElementById("btnCopiar").style.display = "none";
});

function encriptar() {
    let valTextarea = document.getElementById("textarea1").value;
    let nuevoTexto = '';
    let contador = 0;

    for (let i = 0; i < valTextarea.length; i++) {
        let caracter = valTextarea[i];

        if (caracter === 'a') {
            nuevoTexto += 'ai';
            contador += 2;
        } else if (caracter === 'e') {
            nuevoTexto += 'enter';
            contador += 5;
        } else if (caracter === 'o'){
            nuevoTexto += 'ober';
            contador += 4;
        } else if (caracter === 'i'){
            nuevoTexto += 'imes';
            contador += 4;
        } else if (caracter === 'u'){
            nuevoTexto += 'ufat';
            contador += 4;
        } else {
            nuevoTexto += caracter;
            contador++;
        }
    }

    console.log("Texto encriptado:", nuevoTexto);
    return nuevoTexto;
}

function encriptarYMostrar() {

    let textarea = document.getElementById("textarea1");
    textarea.value = textarea.value.toLowerCase();

    let textoEncriptado = encriptar();
    document.getElementById("texRes").textContent = textoEncriptado;
    document.getElementById("textarea1").value = "Ingrese su texto aquí"; 
    document.getElementById("btnCopiar").style.display = "block";
    document.querySelector(".texResNin").style.display = "none";
    document.querySelector(".texResNin2").style.display = "none";
}

function desencriptar() {
    let valTextarea = document.getElementById("textarea1").value;
    let nuevoTexto = '';
    let i = 0;

    while (i < valTextarea.length) {
        let caracter = valTextarea[i];

        if (caracter === 'a' && valTextarea.substring(i, i + 2) === 'ai') {
            nuevoTexto += 'a';
            i += 2; 
        } else if (caracter === 'e' && valTextarea.substring(i, i + 5) === 'enter') {
            nuevoTexto += 'e';
            i += 5; 
        } else if (caracter === 'o' && valTextarea.substring(i, i + 4) === 'ober') {
            nuevoTexto += 'o';
            i += 4;
        } else if (caracter === 'i' && valTextarea.substring(i, i + 4) === 'imes') {
            nuevoTexto += 'i';
            i += 4;
        } else if (caracter === 'u' && valTextarea.substring(i, i + 4) === 'ufat') {
            nuevoTexto += 'u';
            i += 4;
        } else {
            nuevoTexto += caracter;
            i++;
        }
    }

    console.log("Texto desencriptado:", nuevoTexto);
    return nuevoTexto;
}

function desencriptarYMostrar() {
    let textarea = document.getElementById("textarea1");
    textarea.value = textarea.value.toLowerCase();

    let textoEncriptado = desencriptar();
    document.getElementById("texRes").textContent = textoEncriptado;
    document.getElementById("textarea1").value = "Ingrese su texto aquí";
    document.getElementById("btnCopiar").style.display = "block";
    document.querySelector(".texResNin").style.display = "none";
    document.querySelector(".texResNin2").style.display = "none";
}

function copiarTexto() {
    let texto = document.getElementById("texRes").textContent;

    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado: " + texto);
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
