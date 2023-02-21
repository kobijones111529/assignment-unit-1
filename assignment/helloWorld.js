console.log('hello world');

const img = document.getElementsByClassName('img')[0];
const caption = document.getElementsByClassName('img-caption')[0];
var storedSrc = null;
var storedCaption = null;

img.onmouseover = function() {
  storedSrc = img.src;
  storedCaption = caption.textContent;
  img.src = 'secret_image.gif';
  caption.textContent = 'Jk';
}

img.onmouseleave = function() {
  if (storedSrc !== null)
    img.src = storedSrc;
  if (storedCaption !== null)
    caption.textContent = storedCaption;
}
