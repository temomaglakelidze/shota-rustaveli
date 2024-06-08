const cursor = document.querySelector(".cursor");
const listItems = document.querySelectorAll(".nav-bar ul li"); // Corrected selector
const navBar = document.querySelector(".nav-bar");
const searchContetnt = document.querySelector(".search-content");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // Changed to item instead of navBar
    cursor.classList.add("link-cursor");
  });

  navBar.addEventListener("mouseover", () => {
    cursor.classList.add("navbar-cursor");
  });

  navBar.addEventListener("mouseout", () => {
    cursor.classList.remove("navbar-cursor");
  });

  item.addEventListener("mouseout", () => {
    // Changed to item instead of navBar
    cursor.classList.remove("link-cursor");
  });
});
searchContetnt.addEventListener("mouseover", () => {
  cursor.classList.add("search-cursor");
});
searchContetnt.addEventListener("mouseout", () => {
  cursor.classList.remove("search-cursor");
});
