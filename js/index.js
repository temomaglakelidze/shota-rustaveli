const cursor = document.querySelector(".cursor");
const listItems = document.querySelectorAll(".list-item");
const element = document.querySelector(".cursor");
const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    element.classList.add("scaled");
    item.classList.add("scaled-item");
  });

  item.addEventListener("mouseout", () => {
    element.classList.remove("scaled");
    item.classList.remove("scaled-item");
  });
});

hero.addEventListener("mouseover", () => {
  cursor.classList.add("hero-cursor");
});

hero.addEventListener("mouseout", () => {
  cursor.classList.remove("hero-cursor");
});
