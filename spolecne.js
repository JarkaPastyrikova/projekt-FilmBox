    // 3. Hamburger menu - funguje
// výběr elementů z HTML
const menuTlacitkoElm = document.querySelector('#menu-tlacitko')
const menuPolozkyElm = document.querySelector('#menu-polozky');

// přidání posluchače
// menuTlacitkoElm.addEventListener("click", function() {
//     menuPolozkyElm.classList.toggle('show');
// });

// Bonus
menuTlacitkoElm.addEventListener("click", function() {
  const jeOtevrene = menuPolozkyElm.classList.toggle('show');

  if (jeOtevrene) {
    menuTlacitkoElm.innerHTML = '<i class="fas fa-xmark"></i>';
  } else {
    menuTlacitkoElm.innerHTML = '<i class="fas fa-bars"></i>';
  }
});



