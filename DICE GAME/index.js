function getRandom(){
   return Math.floor(Math.random()*6)+1;
}

function getDice(r){
    
    return "images/dice"+r+".png";
}


// for dice 1
let d1= document.querySelectorAll("img")[0];
let r1 = getRandom();
d1.setAttribute("src",getDice(r1));

// for dice 2
let d2=document.querySelectorAll("img")[1];
let r2 = getRandom();
d2.setAttribute("src",getDice(r2));

// winner
if( r1 > r2 ){
    document.querySelector("h2").innerHTML= " 🥳 DICE 1 WON! 🥳";
} else if(r1 < r2 ){
    document.querySelector("h2").innerHTML= " 🥳 DICE 2 WON! 🥳";
}else{
    document.querySelector("h2").innerHTML= " DRAW !";
}