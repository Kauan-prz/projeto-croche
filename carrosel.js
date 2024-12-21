let counter = 1; // Slide inicial
const interval = 5000; // Intervalo de 5 segundos

setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1; // Reinicia no primeiro slide
  }
}, interval);

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

