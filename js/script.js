const navBtn = document.getElementById('nav_btn');
const hmenu = document.querySelector('.menu');
const hclose = document.querySelector('.close');
const navMenu = document.getElementById('navMenu')


const clickMenu = () => {
    if (hmenu.classList.contains('active')) {
        hmenu.classList.remove('active');
        navMenu.style.display = "block";
    } else {
        hmenu.classList.add('active');
        navMenu.style.display = "";
    }
    hclose.classList.toggle('active');
}

navBtn.addEventListener('click', clickMenu);