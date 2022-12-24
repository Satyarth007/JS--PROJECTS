
// mouse click 
for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", mouseclick);
}
function mouseclick(){
    let b = this.innerHTML;
    playsong(b);
    animatebutton(b);
}

// keyboard input 
document.addEventListener("keydown",kb);
function kb(event){
    playsong(event.key);
    animatebutton(event.key);
}

// animation 
function animatebutton(x){
    let y=document.querySelector("."+x);
    y.classList.add("pressed");
    setTimeout(function(){
        y.classList.remove("pressed");
    },100);
}

// song 
function playsong(b) {
    

    ss: switch (b) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break ss;
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break ss;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break ss;
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break ss;
        case "j":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break ss;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break ss;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break ss;
        default:console.log(b);    
    }

}