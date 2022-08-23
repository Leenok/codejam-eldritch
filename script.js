//import { app } from 'mod.js';
/*import difficulties from './data/difficulties.js';
console.log(difficulties);

*/
//let aa = require();
console.log("sayHi");
//import {sayHi} from 'sayHi.js';
const getBlogTitle = require('./mod.js');
console.log(getBlogTitle);
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



