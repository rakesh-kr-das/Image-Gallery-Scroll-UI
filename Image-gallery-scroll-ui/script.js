let gallery = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

gallery.style.scrollBehavior = "smooth";

gallery.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  gallery.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
  gallery.scrollLeft += gallery.clientWidth;
});

backBtn.addEventListener("click", () => {
  gallery.scrollLeft -= gallery.clientWidth;
});
