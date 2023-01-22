//creating audio object
var audio = new Audio("sounds/crash.mp3");

var student = {
    age:1,
    class:2
}



for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       this.style.color = "white";
       audio.play();
       console.log(this.innerHTML);
    })
}
