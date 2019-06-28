// function changeItem() {
//     document.getElementById('team-jane').style.background = 'red';
//   }

//   document.getElementById('team-jane'); 
// el.style.cssText="background:#00FF00; border:2px solid #FF0000;"; 
// function changeItem() {
//     document.getElementById('team-grid').style.cssText = 'background:#00FF00; border:2px solid #FF0000;';
// }
// function rechangeItem() {
//     document.getElementById('team-grid').style.cssText = 'background:transparent; border:none;';
//   }

//   function changeItems() {
//     document.getElementsByClassName('team-grid').style.cssText = 'background:#00FF00; border:2px solid #FF0000;';
// }
// function rechangeItems() {
//     document.getElementsByClassName('team-grid').style.cssText = 'background:transparent; border:none;';
// }
"use strict";


// Присвоение стилей любому элементу
const menuLinks = document.querySelectorAll(".works-item");

for (const link of menuLinks) {
  link.addEventListener("mouseover", e => {
    for (const link of menuLinks) {
      if (link != e.target) {
          link.style.cssText = "filter: blur(2px) brightness(70%); transform: scale(.9); transition: all 1s ease-in-out;";
         } 
    }
    link.style.cssText = "filter: blur(0px) brightness(100%); transform: scale(1); transition: all 1s ease-in-out;";
});
}

for (const link of menuLinks) {
  link.addEventListener("mouseout", e => {
    for (const link of menuLinks) {
     link.style.cssText = "filter: blur(0px) brightness(100%); transform: scale(1); transition: all 1s ease-in-out;";
    }
});
}


// Адаптивное меню

menu.onclick = function myFunction() {
  // document.getElementById('menu').innerHTML = "&#10539;";
  

  var x = document.getElementById('myTopnav');
 
  if (x.className === "topnav") {
   x.className += " responsive";
   } else {
       x.className = "topnav";
  }
}
