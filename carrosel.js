let counter = 1; // Slide inicial
const interval = 5000; // Intervalo de 5 segundos

setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1; // Reinicia no primeiro slide
  }
}, interval);

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", function () {
    const content = this.querySelector("div");
    if (this.open) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});