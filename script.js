import difficulties from './data/difficulties.js';
console.log(difficulties);

import hi from "./mod.js";
console.log(hi);

/* выбор карты */
const ancients = document.querySelector('.ancient');
let card = "Cthulthu";
let leavel = "norm";
ancients.addEventListener( "click" , (e) => {
    document.querySelector('.chooseCard').innerHTML = e.path[0].alt;
    card = e.path[0].alt;
});

/* выбор уровня */
let leval = document.getElementById('select');
leval.addEventListener('change', function(e){
    leavel = e.target.value;
    document.querySelector('.chleval').innerHTML = leavel;
});



