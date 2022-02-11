const chkHamburguer = document.querySelector('#chkHamburguer');
const navList = document.querySelector('.nav-list');

chkHamburguer.addEventListener('click', (e) => {
    navList.classList.toggle('active');
});
