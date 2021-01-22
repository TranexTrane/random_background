//======= variables ===== //

//on vient créer un nombre aléatoire

let randomNumber = Math.floor(Math.random()*5+1);
let body = document.querySelector('body');
// let monArray = [
    
// ]
/// on déclenche le choix de l'image de fond ici
    
    function changeBG() { 
    body.style.background = "url(/img/img_"+ randomNumber +".jpg) center/cover";
}

window.onload = changeBG();

