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
