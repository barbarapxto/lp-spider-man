const chkHamburguer = document.querySelector('#chkHamburguer');
const navList = document.querySelector('.nav-list');

chkHamburguer.addEventListener('click', (e) => {
    navList.classList.toggle('active');
});

const spidermanContainer = document.querySelector('.spiderman-container');
VanillaTilt.init(spidermanContainer, {
    perspective: 2000,
    scale: 1.05,
});
