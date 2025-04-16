function Calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var soma = numero1 + numero2;
    var maior20 = soma + 8;
    var menor20 = soma - 5;

    var resultadofinal = "";

    if(soma > 20) {
        maior20;
        document.getElementById("resultado").textContent = "O resultado é: " + maior20;
    } else {
        menor20;
        document.getElementById("resultado").textContent = "O resultado é: " + maior20;
    }


}