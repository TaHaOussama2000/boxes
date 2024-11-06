let d = document.getElementById("d");
window.onload = () => {
  let x = setInterval(() => {
    d.textContent = Number(d.textContent) - 1;
    if (d.textContent == 0) {
      clearInterval(x);
      d.textContent = "Congratilition";
    }
  }, 100);
};
