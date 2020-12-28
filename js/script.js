$(document).ready(function () {
    imc = () => {
        let nome = $("#nomePesooa").val()
        let altura = $("#alturaPesooa").val()
        let peso = $("#pesoPesooa").val()
        let resultado = $("#resultado")
        if (nome !== "" && altura !== "" && peso !== "") {
let classificacao ="";
            var valorIMC = (peso / (altura * altura)).toFixed(1);

            if (valorIMC < 18.5) {
                classificacao = " Abaixo do peso!!!"
            }else if (valorIMC < 25){
                classificacao = "Peso ideal parabens !!!"
            }else if (valorIMC < 30){
                classificacao = "Acima do peso, cuidado!!!"
            }else if (valorIMC < 35){
                classificacao = " Com Obesidade Grau 1, cuidado!!!"
            }else if (valorIMC < 40){
                classificacao = "Com Obesidade Grau 2, cuidado!!!"
            }else {
                classificacao = " Com Obesidade Grau 3, cuidado!!!"
            }



            resultado.text(`${nome} seu IMC é ${valorIMC} e você está  ${classificacao}`)

        } else {
           resultado.text("Preencha todos os campos!!") 
        }
    }


})