import ancientsData from "./data/ancients.js";
/* import данных  карт  */
import cardsDataBrown from "./data/mythicCards/brown/index.js";
import cardsDataBlue from "./data/mythicCards/blue/index.js";
import cardsDataGreen from "./data/mythicCards/green/index.js"

/*function random мешаем массив*/
function shuffle(a, b) {
    return Math.random()-0.5;
}

let stnombers= [[0,0,0],[0,0,0],[0,0,0]];// grin(st1,2,3) brow, blue

/*write stages колличество карт*/
function writestages(){
    document.querySelector('.st1').innerHTML =`<div class="p green">${stnombers[0][0]}</div> <div class="p brown">${stnombers[1][0]}</div><div class="p blue">${stnombers[2][0]}</div> `;
    document.querySelector('.st2').innerHTML =`<div class="p green">${stnombers[0][1]}</div> <div class="p brown">${stnombers[1][1]}</div><div class="p blue">${stnombers[2][1]}</div> `;
    document.querySelector('.st3').innerHTML =`<div class="p green">${stnombers[0][2]}</div> <div class="p brown">${stnombers[1][2]}</div><div class="p blue">${stnombers[2][2]}</div> `;
}

writestages();

function updatestagekol(drevniy){
    let stOne = drevniy.firstStage;
    let stTwo = drevniy.secondStage;
    let stThree = drevniy.thirdStage;
    stnombers[0][0] = stOne.greenCards;
    stnombers[1][0] = stOne.brownCards;
    stnombers[2][0] = stOne.blueCards;

    stnombers[0][1] = stTwo.greenCards;
    stnombers[1][1] = stTwo.brownCards;
    stnombers[2][1] = stTwo.blueCards;

    stnombers[0][2]= stThree.greenCards;
    stnombers[1][2] = stThree.brownCards;
    stnombers[2][2] = stThree.blueCards;
}

/* выбор уровня */
let leval = document.getElementById('select');
leval.addEventListener('change', function(e){
    leavel = e.target.value;
    document.querySelector('.chleval').innerHTML = leavel;
    /*let packThree = cardsDataBrown.filter(x=>x.difficulty== leavel).sort(shuffle);
    console.log(packThree);
    */
});

/* выбор древнего */
const ancients = document.querySelector('.ancient');
let card = "Cthulthu";
let leavel = "normal";
ancients.addEventListener( "click" , (e) => {
    card = e.target.alt;
    let indexDrev = ancientsData.findIndex(x=> x.name == card);
    
    updatestagekol(ancientsData[indexDrev]);//обновл данные по картам по уровням
    writestages();
    zames(ancientsData[indexDrev]);
    rubh.classList.remove('hide');
    rubsh.classList.add('hide');
    console.log(rubsh.classList);
    //if( rubsh.classList);
   
});



/*карты  */
let packThree = cardsDataBrown.filter(x=>x.difficulty== leavel).sort(shuffle);

let itogpack = [];

function zames(x){
    let allgreen = stnombers[0].reduce((a,b)=>a+b, 0);
    let allblue = stnombers[2].reduce((a,b)=>a+b, 0);
    let allbrown = stnombers[1].reduce((a,b)=>a+b, 0);
    document.querySelector('.oobz').innerHTML = "green: "+allgreen+" brown: "+allbrown+ " blue: "+allblue;
    /*level normal */
    let packgreen = cardsDataGreen.sort(shuffle).slice(0, allgreen);
    let packbrown = cardsDataBrown.sort(shuffle).slice(0, allbrown);
    let packblue = cardsDataBlue.sort(shuffle).slice(0, allblue);
    
    let grst1 = packgreen.splice(0, x.firstStage.greenCards);
    let brst1 = packbrown.splice(0, x.firstStage.brownCards);
    let blst1 = packblue.splice(0, x.firstStage.blueCards);
    let packst1 = grst1.concat(brst1, blst1).sort(shuffle);

    let grst2 = packgreen.splice(0, x.secondStage.greenCards);
    let brst2 = packbrown.splice(0, x.secondStage.brownCards);
    let blst2 = packblue.splice(0, x.secondStage.blueCards);
    let packst2 = grst2.concat(brst2, blst2).sort(shuffle);

    let packst3 = packgreen.concat(packbrown, packblue).sort(shuffle);
    itogpack = packst1.concat(packst2, packst3);
    console.log("pk1");
    console.log(packst1);
    console.log("pk2");
    console.log(packst2);
    console.log("pk3");
    console.log(packst3);
}

let rubh = document.querySelector('.rubhide');
let rubsh = document.querySelector('.rubshow');
let kolod =  document.querySelector('.kolod');

/*dvivod crd */
let namek = document.querySelector('.namekard');
  
let z = 0;

rubh.addEventListener('click',function showcard(){
    rubsh.classList.remove('hide');
    if(z+1 == itogpack.length){
        rubh.classList.add('hide');
        return false;
    }
    // let ry = `https://github.com/Leenok/codejam-eldritch/blob/main/assets/MythicCards/${itogpack[z].color}/${itogpack[z].cardFace}?raw=true}`
     let yy = `assets/MythicCards/${itogpack[z].color}/${itogpack[z].cardFace}`;
     rubsh.src = yy;
     namek.innerHTML = itogpack[z].cardFace;
     mincolor(itogpack[z].color);
     z++;
 });

//let stnombers= [[0,0,0],[0,0,0],[0,0,0]];// grin(st1,2,3) brow, blue
// уменшение чисел карты оставш в коллоде
function mincolor(color){
    let cc = (color == "green")? 0 : (color == "brown")? 1: 2;
    if(stnombers[cc][0] == 0 && stnombers[cc][1]== 0){
        stnombers[cc][2]--;
    }else if(stnombers[cc][0] == 0 ){
        stnombers[cc][1]--;
    }else{
        stnombers[cc][0]-- ;
    }
    
    console.log(cc);
    console.log(stnombers);
    writestages();

}
