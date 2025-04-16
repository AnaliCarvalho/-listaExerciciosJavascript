function calcular() {
    var bmaior = parseFloat(document.getElementById("bmaior").value);
    var bmenor = parseFloat(document.getElementById("bmenor").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var calculo = ((bmaior + bmenor) * altura ) / 2;

    document.getElementById("resultado").textContent = 'O resultado é:' + calculo; 

}