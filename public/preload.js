window.onload = () => {
  setTimeout(() => {
    let e = document.getElementById("preload");
    e.style.opacity = "0";
  }, 400),
    setTimeout(() => {
      let e = document.getElementById("preload");
      (e.style.display = "none"), e.removeAttribute("class");
    }, 800);
};
