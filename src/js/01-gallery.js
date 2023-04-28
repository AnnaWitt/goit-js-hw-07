import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
let imageFromLightbox;

let galleryItemEl = galleryItems
    .map(
        (item) => `
<li class='gallery__item'>
  <a class='gallery__link' href='${item.original}'>
    <img
      class='gallery__image'
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</li>
`
    )
    .join('');

galleryEl.innerHTML = galleryItemEl;

console.log(galleryItems);


const clickAndShowImage = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    event.preventDefault();
    imageFromLightbox = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    imageFromLightbox.show();
  }
};


galleryEl.addEventListener("click", clickAndShowImage);
