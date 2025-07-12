const button2Container = document.querySelector('.button_2_container');
const button2s = button2Container.querySelectorAll('.button_2');


const marker = document.createElement('div');
marker.className = 'button_2_marker hide';
button2Container.appendChild(marker);

button2s.forEach((btn, idx) => {
    btn.addEventListener('mouseenter', () => {

        marker.style.top = (btn.offsetTop - btn.offsetHeight- 170) + 'px';
        marker.classList.remove('hide');
    });
    btn.addEventListener('mouseleave', () => {
        marker.classList.add('hide');
    });
});