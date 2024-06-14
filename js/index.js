const cursor = document.querySelector(".cursor");
const navBar = document.querySelector(".nav-bar");
const searchContent = document.querySelector(".search-content");
const navBarLink = document.querySelectorAll(".nav-bar ul li");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
navBar.addEventListener("mouseover", () => {
  cursor.classList.add("navbar-cursor");
});
navBar.addEventListener("mouseout", () => {
  cursor.classList.remove("navbar-cursor");
});

navBarLink.forEach((navBarLink) => {
  navBarLink.addEventListener("mouseover", () => {
    cursor.classList.add("link-cursor");
  });

  navBarLink.addEventListener("mouseout", () => {
    cursor.classList.remove("link-cursor");
  });
});

searchContent.addEventListener("mouseover", () => {
  cursor.classList.add("search-cursor");
});
searchContent.addEventListener("mouseout", () => {
  cursor.classList.remove("search-cursor");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".hidden-navbar");
  const menuToggleBtn = document.querySelector(".hidden-navbar-arrow");
  const overlay = document.querySelector(".overlay");

  document.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 1200 && e.clientX <= window.innerWidth * 0.1) {
      menuToggleBtn.classList.add("visible");
    } else if (!menuBar.classList.contains("visible")) {
      menuToggleBtn.classList.remove("visible");
    }
  });

  menuToggleBtn.addEventListener("click", () => {
    menuToggleBtn.style.transform = "rotate(180deg)";
    const isMenuVisible = menuBar.classList.toggle("visible");
    if (isMenuVisible) {
      overlay.classList.toggle("visible");
      menuToggleBtn.classList.add("visible");
    } else {
      overlay.classList.remove("visible");
      menuToggleBtn.style.transform = "rotate(0deg)";
    }
  });

  overlay.addEventListener("click", () => {
    menuToggleBtn.style.transform = "rotate(0deg)";
    menuToggleBtn.classList.remove("visible");
    menuBar.classList.remove("visible");
    overlay.classList.remove("visible");
  });
});
