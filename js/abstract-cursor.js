const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
navBar.addEventListener("mouseover", () => {
  cursor.classList.add("blue-cursor");
});
navBar.addEventListener("mouseout", () => {
  cursor.classList.remove("blue-cursor");
});
navSoc.addEventListener("mousemove", () => {
  cursor.classList.add("blue-cursor");
});
navSoc.addEventListener("mouseout", () => {
  cursor.classList.remove("blue-cursor");
});
navBarLink.forEach((navBarLink) => {
  navBarLink.addEventListener("mouseover", () => {
    cursor.classList.add("white-cursor");
  });

  navBarLink.addEventListener("mouseout", () => {
    cursor.classList.remove("white-cursor");
  });
});

searchContent.addEventListener("mouseover", () => {
  cursor.classList.add("blue-cursor");
});
searchContent.addEventListener("mouseout", () => {
  cursor.classList.remove("blue-cursor");
});
socLinks.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("blue-cursor");
  });
  link.addEventListener("mouseout", () => {
    cursor.classList.remove("blue-cursor");
  });
});
abstractContent.addEventListener("mouseover", () => {
  cursor.classList.add("blue-cursor");
});
abstractContent.addEventListener("mouseout", () => {
  cursor.classList.remove("blue-cursor");
});
document.addEventListener(cursor, function () {
  cursor.style.left = 0;
  cursor.style.top = 0;
});
document.addEventListener("touchend", function () {
  cursor.style.display = "block";
});
