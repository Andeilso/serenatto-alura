const switchDarkMode = document.querySelector('#switchDarkMode');
const body = document.querySelector('body');

switchDarkMode.addEventListener( 'click', () => {
    const modo = switchDarkMode.checked? 'dark' : 'light';
    body.setAttribute('data-bs-theme', modo);
})