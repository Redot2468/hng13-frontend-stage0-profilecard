const timeElement = document.querySelector(".time_in_ms");

setInterval(() => {
  const currentTime = Date.now();
  timeElement.textContent = currentTime;
}, 1000);
