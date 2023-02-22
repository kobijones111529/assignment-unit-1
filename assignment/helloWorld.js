console.log('hello world');

const img = document.getElementsByClassName('img')[0];
const caption = document.getElementsByClassName('img-caption')[0];
var storedSrc = null;
var storedAlt = null;
var storedCaption = null;

img.onmouseover = () => {
  storedSrc = img.src;
  storedAlt = img.alt;
  storedCaption = caption.textContent;
  img.src = 'secret_image.gif';
  img.alt = 'Rick Astley GIF';
  caption.textContent = 'Jk';
}

img.onmouseleave = () => {
  if (storedSrc !== null)
    img.src = storedSrc;
  if (storedAlt !== null)
    img.alt = storedAlt;
  if (storedCaption !== null)
    caption.textContent = storedCaption;
}
