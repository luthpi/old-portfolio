export const onscroll = () => {
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (scrollTop > lastScrollTop) {
        navbar.classList.remove("bg-[#161616]");
        navbar.classList.remove("shadow-md");
        navbar.classList.remove("py-2");
        navbar.classList.add("bg-transparent");
        navbar.classList.add("py-1");
        navbar.classList.remove("top-0");
        navbar.style.top = "-60px";
      } else if (scrollTop === 0) {
        navbar.classList.remove("bg-[#161616]");
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("shadow-md");
        navbar.classList.remove("py-2");
      } else {
        navbar.classList.add("bg-[#161616]");
        navbar.classList.add("shadow-md");
        navbar.classList.add("py-2");
        navbar.classList.remove("bg-transparent");
        navbar.classList.remove("py-1");
        navbar.classList.remove("top-0");
        navbar.style.top = "0";
      }
    } else {
      return null;
    }
    lastScrollTop = scrollTop;
  });
};
