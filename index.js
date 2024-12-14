function handleClick(){
    alert("I got clicked!");
}
function soundLetter(letter){

    switch(letter) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
    
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
        break;
        case "l":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break; }
    
}
for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonInnerHTML= this.innerHTML;
   soundLetter(buttonInnerHTML);
   pressedKey(buttonInnerHTML);
});}

document.addEventListener("keydown", function(event){
  
    soundLetter(event.key);
    pressedKey(event.key);
    
    });

function pressedKey(key){
    const active = document.querySelector("."+ key)
    active.classList.add("pressed");
    setTimeout(() => {
        active.classList.remove("pressed");
    }, 250);
}