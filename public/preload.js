window.onload = () => {
  setTimeout(function load() {
    const loader = document.getElementById("preload");
    loader.style.opacity = "0";
  }, 200);
  setTimeout(function afterLoad() {
    const loader = document.getElementById("preload");
    loader.style.display = "none";
    loader.removeAttribute("class");
  }, 300);
};
