document.addEventListener("DOMContentLoaded", function () {
  const abstractContent = document.querySelector(".abstract-ontent");
  let curentPosition = 0;
  const targetPosition = 1000;
  const scrollSpeed = 10;
  function SmoothScroll() {
    curentPosition += scrollSpeed;
    window.scrollTo(0, curentPosition);

    if (curentPosition > targetPosition) {
      requestAnimationFrame(SmoothScroll);
    }
  }
  setTimeout(() => {
    requestAnimationFrame(smoothScroll);
  }, 1000);
});
