export const onscroll = () => {
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    const navbar = document.getElementById("navbar");
    const upButton = document.getElementById("upButton");
    if (scrollTop > lastScrollTop) {
      navbar.classList.remove("bg-[#161616]");
      navbar.classList.remove("shadow-md");
      navbar.classList.remove("py-2");
      navbar.classList.add("bg-transparent");
      navbar.classList.add("py-1");
      navbar.classList.remove("top-0");
      upButton.classList.add("bottom-4");
      upButton.classList.add("right-4");
      upButton.classList.remove("mb-[100vh]");
      upButton.classList.add("mb-0");
      navbar.style.top = "-60px";
    } else if (scrollTop === 0) {
      navbar.classList.remove("bg-[#161616]");
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("shadow-md");
      navbar.classList.remove("py-2");
      upButton.classList.add("mb-[100vh]");
      upButton.classList.remove("mb-0");
    } else {
      navbar.classList.add("bg-[#161616]");
      navbar.classList.add("shadow-md");
      navbar.classList.add("py-2");
      navbar.classList.remove("bg-transparent");
      navbar.classList.remove("py-1");
      navbar.classList.remove("top-0");
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
};
