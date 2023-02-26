console.log('hello world');

const img = document.getElementsByClassName('img')[0];
const caption = document.getElementsByClassName('img-caption')[0];
let storedSrc = null;
let storedAlt = null;
let storedCaption = null;

img.onmouseover = () => {
  storedSrc = img.src;
  storedAlt = img.alt;
  storedCaption = caption.textContent;
  img.src = 'secret_image.gif';
  img.alt = 'Rick Astley GIF';
  caption.textContent = 'Jk';
};

img.onmouseleave = () => {
  img.src = storedSrc ?? img.src;
  img.alt = storedAlt ?? img.alt;
  caption.textContent = storedCaption ?? caption.textContent;
  storedSrc = null;
  storedAlt = null;
  storedCaption = null;
};
