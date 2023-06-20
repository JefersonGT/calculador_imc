function calcularIMC() {
  // Obter os valores de peso e altura dos campos de input
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));

  if (peso && altura) {
    // Calcular o IMC
    var imc = peso / (altura * altura);
    var resultado = imc.toFixed(1).replace('.', ',');

    var classificacao = '';
    var corResultado = '';
    var corMensagem = '';

    // Determinar a classificação e cores com base no IMC calculado
    if (imc < 18.5) {
      classificacao = 'Cuidado, você está muito magro(a)';
      corResultado = '#e85d04'; // Laranja
      corMensagem = '#e85d04'; // Laranja
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Que show, você está no peso Ideal';
      corResultado = '#008000'; // Verde
      corMensagem = '#008000'; // Verde
    } else if (imc >= 24.9 && imc < 29.9) {
      classificacao = 'Cuidado, você está levemente acima do Peso';
      corResultado = '#e85d04'; // Laranja
      corMensagem = '#e85d04'; // Laranja
    } else {
      classificacao = 'Procure ajuda, você está muito acima do peso';
      corResultado = '#FF0000'; // Vermelho
      corMensagem = '#FF0000'; // Vermelho
    }

    // Exibir o resultado na página
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<span style="color: ${corResultado};">${resultado}</span><br><br><span style="color: ${corMensagem};">${classificacao}</span>`;
  } else {
    // Exibir mensagem de erro se algum valor estiver em falta
    document.getElementById('resultado').innerText = "Preencha os valores corretamente.";
  }
}

function limparform() {
  // Limpa os campos de input
  document.getElementById('peso').value = "";
  document.getElementById('altura').value = "";
  document.getElementById('resultado').textContent = "";
}