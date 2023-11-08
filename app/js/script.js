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

  function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Ovo polje mora biti popunjeno.";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Ovo polje mora biti popunjeno.";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Nevažeća mail adresa.";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Ovo polje mora biti popunjeno.";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Ovo polje mora biti popunjeno.";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }