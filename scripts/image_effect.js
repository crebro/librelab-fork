function applyImageEffect() {
  const imgElements = document.getElementsByTagName("img");
  const body = document.getElementsByTagName("body");
  const overlayelem = document.createElement("div");
  body[0].appendChild(overlayelem);

  for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].insertAdjacentElement;

    imgElements[i].addEventListener("click", () => {
      if (imgElements[i].classList.contains("img-selected")) {
        imgElements[i].classList.toggle("img-intermediary");
        setTimeout(() => {
          imgElements[i].classList.toggle("img-intermediary");
        }, 100);
      }

      imgElements[i].classList.toggle(`img-selected`);
      body[0].classList.toggle("non-scrollable");
      overlayelem.classList.toggle("overlay");
    });
  }
}
