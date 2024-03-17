const ingresoTexto = document.getElementById("ingresoTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const btnCopiar = document.getElementById("btnCopiar");
const rightInfo = document.getElementById("rightInfo");
const dibujo = document.getElementById("dibujo");
const right = document.getElementById("right");





let cambiar = [

    ["e" , "enter"],
    ["o" , "ober"],
    ["i" , "imes"],
    ["a" , "ai"],
    ["u" , "ufat"],

]


const change = (newvalor) => {
    mensajeFinal.innerHTML = newvalor;

    dibujo.classList.add("oculto");

    ingresoTexto.value="";
    rightInfo.style.display= "none";
    btnCopiar.style.display= "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}


const reset = () =>{

    mensajeFinal.innerHTML = "";

    dibujo.classList.remove("oculto");
    rightInfo.style.display= "block";
    btnCopiar.style.display= "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}


btnEncriptar.addEventListener("click", () => {
    
    const texto = ingresoTexto.value.toLowerCase() //Traerá el texto ingresa y con la función toLower todo lo va a convertir en minuscula

    if(texto!= ""){
        function encriptar(newText) {
    
            for (let i = 0; i < cambiar.length; i++){
                if (newText.includes(cambiar[i][0])) {
                    newText = newText.replaceAll(cambiar[i][0], cambiar[i][1]);
                };
            };
            return newText
        };

    }else{
        alert("Ingrese un texto para incriptar");
        reset();
    }



    //const textoIncriptado = encriptar(texto);

    change(encriptar(texto));


 
    //console.log(encriptar(texto));
  

})

btnDesencriptar.addEventListener("click", () => {

    const texto = ingresoTexto.value.toLowerCase();

    if(texto!= ""){
        function desencriptar(newText){
            for(let i = 0; i<cambiar.length; ++i){
                if(newText.includes(cambiar[i][1])){
                    newText = newText.replaceAll(cambiar[i][1], cambiar[i][0]);
                };
            };
            return newText
        };
    }else{
        alert("Ingrese un texto para Desencriptar");
        reset();
    }

    change(desencriptar(texto))
})


btnCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);

    texto.select();
    document.execCommand('copy')
    alert("Texto copiado");

    reset();


})