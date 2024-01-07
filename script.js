const result = document.getElementById("resultadoFinal");

function pularProximoInput(event, proximoInput) {
    if (event.key === "Enter") {
        document.getElementById(proximoInput).focus();
    }
}

const verificaImc = (alturaScript, pesoScript) => {
    if (isNaN(alturaScript) && isNaN(pesoScript)) {
      result.innerHTML = "Por favor, insira um número válido!";
    } else {
      let imc = parseFloat(pesoScript / (alturaScript * alturaScript)).toFixed(2);
  
      if (imc < 18.5) {
        result.innerHTML = "Seu imc é: " + imc + ", e você está abaixo do peso";
      } else if (imc > 18.5 && imc < 24.9) {
        result.innerHTML =
          "Seu imc é: " + imc + ", e você está com o peso normal";
      } else if (imc > 25 && imc < 29.9) {
        result.innerHTML = "Seu imc é: " + imc + ", e você está com sobrepeso";
      } else if (imc > 30 && imc < 34.9) {
        result.innerHTML =
          "Seu imc é: " + imc + ", e você está com Obesidade grau I";
      } else if (imc > 35 && imc < 39.9) {
        result.innerHTML =
          "Seu imc é: " + imc + ", e você está com Obesidade grau II";
      } else if (imc > 40) {
        result.innerHTML =
          "Seu imc é: " + imc + ", e você está com Obesidade grau III";
      }
    }
  };


function calcularImc(event) {
  const alturaScript = parseFloat(
    document.getElementById("altura").value
  ).toFixed(2);
  
  pularProximoInput(event, 'peso');

  const pesoScript = parseFloat(document.getElementById("peso").value).toFixed(
    2
  );

  pularProximoInput(event, 'resultado');

  verificaImc(alturaScript, pesoScript);
}
