const entranceImages = [
  "images/illust89.jpg",
  "images/5.12.png",
  "images/5.26.png"
];

function initEntranceSlides() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const art = document.querySelector(".entrance-art");
  const slides = [art.querySelector("img")];

  entranceImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    art.appendChild(img);
    slides.push(img);
  });

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4500);
}

initEntranceSlides();
