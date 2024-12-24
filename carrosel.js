let counter = 0; // Slide inicial
const slides = document.querySelectorAll('.carousel img'); // Seleciona todas as imagens
const totalSlides = slides.length; // Total de imagens
const interval = 2000; // Intervalo de 2 segundos para cada imagem (ajustado para mais rápido)
const transitionDuration = 500; // Tempo de transição mais rápido (500ms)

function changeSlide() {
  counter = (counter + 1) % totalSlides; // Incrementa o contador e reinicia ao atingir o final
  const track = document.querySelector('.carousel-track'); // O contêiner do carrossel

  // Calcula a nova posição da imagem no carrossel
  const newTransformValue = -counter * 100; 
  track.style.transition = `transform ${transitionDuration}ms ease-in-out`; // Transição de 500ms
  track.style.transform = `translateX(${newTransformValue}%)`;
}

// Chama a função para mudar o slide a cada 2 segundos
setInterval(changeSlide, interval);

document.querySelectorAll('.faq-container details').forEach((detail) => {
  const content = detail.querySelector("p");

  detail.addEventListener("toggle", function () {
    if (detail.open) {
      // Quando abre, ajusta max-height e opacidade
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = 1;
    } else {
      // Quando fecha, ajusta max-height e opacidade para 0
      content.style.maxHeight = "0";
      content.style.opacity = 0;
    }
  });
});

document.querySelectorAll('.faq-container details').forEach((detail) => {
  detail.addEventListener('click', function () {
    // Fecha outros detalhes automaticamente quando um for aberto
    document.querySelectorAll('.faq-container details').forEach((otherDetail) => {
      if (otherDetail !== detail && otherDetail.open) {
        otherDetail.removeAttribute('open');
      }
    });
  });
});

document.querySelectorAll(".faq-container details").forEach((detail) => {
  const content = detail.querySelector("p");

  detail.addEventListener("click", function () {
    // Forçar reflow para garantir a animação toda vez
    void content.offsetHeight; // Garantir que o navegador recalcule o layout

    if (detail.open) {
      // Define a altura para o conteúdo expandido e a opacidade
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = 1;
    } else {
      // Fecha o conteúdo com a transição
      content.style.maxHeight = "0";
      content.style.opacity = 0;
    }
  });

  // Sempre que o estado de "open" mudar, re-aplica a transição
  detail.addEventListener("toggle", function () {
    // Força a transição
    if (detail.open) {
      // Quando o 'details' abre, aplica transição
      content.style.transition = "max-height 1s ease-out, opacity 1s ease-out";
    } else {
      // Quando o 'details' fecha, aplica transição
      content.style.transition = "max-height 1s ease-in, opacity 1s ease-in";
    }
  });
});

