
var i = 0;
while (i < document.querySelectorAll(".drum").length) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var letter = this.innerHTML;
        makeSound(letter);
        buttonAnimation(letter);
    });
    i++;
}

//The querySelector() method returns the first element that matches a CSS selector.


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(selectedKey){
    switch (selectedKey) {
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

            default: 
            alert(selectedKey+" not assigned to any sound.");
    }
    
}

function buttonAnimation(currentKey){
     var activeKey=document.querySelector("."+currentKey);
     activeKey.classList.add("pressed");
     // timeout of 0.1 seconds....
     setTimeout(function(){
        activeKey.classList.remove("pressed");
     },100);
}
