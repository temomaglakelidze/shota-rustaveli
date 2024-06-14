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
mainBox.addEventListener("mousemove", () => {
  cursor.classList.add("blue-cursor");
});
mainBox.addEventListener("mouseout", () => {
  cursor.classList.remove("blue-cursor");
});
