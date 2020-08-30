const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild); //if I remove this and keep line 9 button disapper if I scroll back up
  } //else { button.disabled = true}
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
}
);

ob.observe(terms.lastElementChild);