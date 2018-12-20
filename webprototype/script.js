let but = document.querySelector(".item5");
let but2 = document.querySelector(".item7");

 
but.addEventListener("mouseenter", coloradd);
but.addEventListener("mouseleave", colorremove);

 but2.addEventListener("mouseenter", coloradd);
but2.addEventListener("mouseleave", colorremove);


 function coloradd() {

this.classList.add("color");
 }
function colorremove() {
this.classList.remove("color");

 }
 
