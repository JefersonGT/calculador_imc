function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
  
    if (peso && altura) {
      var imc = peso / (altura * altura);
      var resultado = imc.toFixed(1).replace('.', ',');
  
      var classificacao = '';
      var corResultado = '';
      var corMensagem = '';
  
      if (imc < 18.5) {
        classificacao = 'Cuidado, você está muito magro(a)';
        corResultado = '#FFD700'; // Amarelo
        corMensagem = '#FFD700'; // Amarelo
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Que show, você está no peso Ideal';
        corResultado = '#008000'; // Verde
        corMensagem = '#008000'; // Verde
      } else if (imc >= 24.9 && imc < 29.9) {
        classificacao = 'Cuidado, você está levemente acima do Peso';
        corResultado = '#FFD700'; // Amarelo
        corMensagem = '#FFD700'; // Amarelo
      } else {
        classificacao = 'Procure ajuda, você está muito acima do peso';
        corResultado = '#FF0000'; // Vermelho
        corMensagem = '#FF0000'; // Vermelho
      }
  
      document.getElementById('resultado').innerHTML = `<span style="color: ${corResultado};">${resultado}</span><br><br><span style="color: ${corMensagem};">${classificacao}</span>`;
    } else {
      document.getElementById('resultado').innerText = "Preencha os valores corretamente.";
    }
  }
  
  function formatarAltura() {
    var inputAltura = document.getElementById('altura');
    var valorAltura = inputAltura.value;
  
    valorAltura = valorAltura.replace(/\D/g, '');
  
    if (valorAltura.length > 1) {
      valorAltura = valorAltura.slice(0, -1) + ',' + valorAltura.slice(-1);
    }
  
    inputAltura.value = valorAltura;
  }
  
  document.getElementById('altura').addEventListener('input', formatarAltura);
  