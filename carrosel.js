let counter = 1; // Slide inicial
const interval = 5000; // Intervalo de 5 segundos

setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1; // Reinicia no primeiro slide
  }
}, interval);
// Função para formatar o tempo no formato MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Recuperar o tempo restante do localStorage (se existir) ou definir como 29 minutos (1740 segundos)
let timeInSeconds = localStorage.getItem('timeInSeconds') ? parseInt(localStorage.getItem('timeInSeconds')) : 29 * 60;

// Função para atualizar o timer e salvar o tempo restante no localStorage
function updateTimer() {
  if (timeInSeconds > 0) {
    timeInSeconds--; // Diminui 1 segundo
    localStorage.setItem('timeInSeconds', timeInSeconds); // Salva o tempo restante no localStorage
    document.getElementById('timer').textContent = formatTime(timeInSeconds); // Atualiza o timer na página
  } else {
    clearInterval(timerInterval); // Para o timer quando chegar a 00:00
    alert('O tempo acabou!'); // Exemplo de ação quando o timer acabar
  }
}

// Inicia o timer assim que a página carregar
window.onload = function() {
  // Exibe o tempo inicial (caso o usuário tenha retornado à página antes)
  document.getElementById('timer').textContent = formatTime(timeInSeconds);
  
  const timerInterval = setInterval(updateTimer, 1000); // Chama a função de atualização a cada 1 segundo
};