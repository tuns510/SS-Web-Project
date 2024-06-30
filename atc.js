const addToCartBtn = document.getElementById('addToCartBtn');
const popup = document.getElementById('popup');

addToCartBtn.addEventListener('click', () => {
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 4000);
});

function closePopup() {
  popup.style.display = 'none';
}
