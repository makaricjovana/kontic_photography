// Selektujte hamburger ikonu za otvaranje side menija
const hamburger = document.querySelector('.mobile-nav_hamburger');

// Selektujte ikonu za zatvaranje side menija
const closeMenu = document.querySelector('.side-menu_cross');

// Selektujte side meni i pozadinsku boju
const sideMenu = document.querySelector('.side-menu');
const sideMenuBackground = document.querySelector('.side-menu_background');

// Inicijalno sakrijte side meni
sideMenu.classList.add('none');
sideMenuBackground.classList.add('none');

// Funkcija za otvaranje side menija
function openSideMenu() {
    // Uklonite klasu 'none' sa side menija i pozadinske boje
    sideMenu.classList.remove('none');
    sideMenuBackground.classList.remove('none');
    
    
}

// Funkcija za zatvaranje side menija
function closeSideMenu() {
    // Dodajte klasu 'none' na side meni i pozadinsku boju
    sideMenu.classList.add('none');
    sideMenuBackground.classList.add('none');
}

// Dodajte event listener za otvaranje side menija
hamburger.addEventListener('click', openSideMenu);

// Dodajte event listener za zatvaranje side menija
closeMenu.addEventListener('click', closeSideMenu);

// Stranica o-meni
const video = document.getElementById("myVideo");

  video.addEventListener("ended", function () {
    video.currentTime = 0; // Postavlja trenutno vreme na početak videa
    video.play(); // Pokreće video ponovo
  });