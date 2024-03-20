function encriptar(){
    let mensaje = document.getElementById("txtEncriptar").value;
    console.log(mensaje);
    let mensajeMinusculas = mensaje.toLowerCase();
    let mensajeSeparado = mensajeMinusculas.split("");
    let mensajeFinal = "";
    let txtEncriptado = "";
    const letras = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    console.log(letras);

    for (let letra of mensajeSeparado) {
        console.log(letra);
        /*if(letra == 'a') letra = 'ai';
        if(letra == 'e') letra = 'enter';
        if(letra == 'i') letra = 'imes';
        if(letra == 'o') letra = 'ober';
        if(letra == 'u') letra = 'ufat';
        console.log(letra);*/
        if(letra.includes(letras[0][0])){
            console.log(letra + " está");
        }else{
            console.log(letra + " no está");
        }
        mensajeFinal += letra;
    }
    console.log(mensajeFinal);

    txtEncriptado = document.getElementById("txtEncriptado");
    txtEncriptado.value = mensajeFinal;
}