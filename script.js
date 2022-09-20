var numeroSecreto = parseInt(Math.random() * 11);
var tentativasRestantes = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "PERAÍ! Algo de errado não está certo, você deve digitar um número de 0 a 10...";
    return;
  }

  if (tentativasRestantes == 0) {
    elementoResultado.innerHTML =
      "Ixaaa, deu ruim... acabou suas chances, tente de novo.";
    return;
  }

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns! Você MENTALIZOU!.";
  } else if (numeroSecreto < chute) {
    elementoResultado.innerHTML =
      "Eita, parece que o número correto é menor... Tente mais " +
      tentativasRestantes +
      " vez(es).";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML =
      "Lasqueira, o número correto é maior! Tente mais " +
      tentativasRestantes +
      " vez(es).";
  }
  tentativasRestantes--;
}