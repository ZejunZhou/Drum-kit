/*********add even listner for all button */

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonHtml = this.innerHTML;
       createSound(buttonHtml);
       buttonAnimation(buttonHtml);
    })
}

/***********Add eventlister to target entire page, keydown as event and asynoumous function as response */

//keyDownEvent is the event object trigger the event 

document.addEventListener("keydown", function(keyDownEvent){
    var keyPressed = keyDownEvent.key;
    createSound(keyPressed);
    buttonAnimation(keyPressed);
})

/****take sounds value of different event such as click and keydown */
function createSound (sounds){
    switch(sounds){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        //print the case if reach the default
        default:
            console.log(sounds);
    }
}

function buttonAnimation(currentButton){
    // find out the html of currentButton being pressed or clicked
    var buttonHTML = document.querySelector("." + currentButton);

    buttonHTML.classList.add("pressed");
    
    // remove the pressed class from classlist after 100 milisec
    setTimeout(function(){
        buttonHTML.classList.remove("pressed");
    }, 100)

}
