var uiCount, uiPlus,  uiMinus, uiInput;

function checkSign(n) {
    if (n < 0) {
        uiCount.style.color = 'red';
    } else {
        uiCount.style.color = 'black';
    };
    return n;
}
function plus(e) {
    uiCount.textContent = checkSign(parseInt(uiCount.textContent) + parseInt(uiInput.value));
}
function minus(e) {
    uiCount.textContent = checkSign(parseInt(uiCount.textContent) - parseInt(uiInput.value));
}
document.addEventListener('DOMContentLoaded', function(e) {
    uiCount = document.querySelector('.count');
    uiPlus = document.querySelector('.plus');
    uiMinus = document.querySelector('.minus');
    uiInput = document.querySelector('.input');

    uiPlus.addEventListener('click', plus);
    uiMinus.addEventListener('click', minus);
})