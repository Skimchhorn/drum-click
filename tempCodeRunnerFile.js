function handleClick(){
    alert("I got clicked!");
}
for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonInnerHTML= this.innerHTML;
switch(buttonInnerHTML) {
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

});}

// for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){
//     document.querySelectorAll(".drum")[i].addEventListener("Key Press")
// }
const inputField = document.querySelector("#title");

document.addEventListener("keydown", (event) => {
    console.log("Key pressed: " + event.key);
});