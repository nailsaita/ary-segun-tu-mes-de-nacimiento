const $select = document.getElementById('select');
const $image = document.querySelector('.image');

$select.addEventListener('change', () => {
    $image.setAttribute('src', `img/ary-${$select.value}.jpg`);
});