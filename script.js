/*alert("Welcome to the Drum Kit");*/
var Number=document.querySelectorAll(".drum").length;
for(var i=0;i<Number;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick()
    {
        var button=this.innerHTML;
        makeSound(button);  
        animation(button);              
    }
}

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    animation(event.key);
}
);

function makeSound(key)
{
    switch(key)
        {
            case "w":
                var audio=new Audio("tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("tom-2.mp3");
                audio.play();
                break; 
            case "s":
                var audio=new Audio("tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("snare.mp3");
                audio.play();
                break; 
            case "k":
                var audio=new Audio("crash.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("kick-bass.mp3");
                audio.play();
                break;
            default:
                break;    
        }        
}

function animation(currentKey)
{
    var activebutton=document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    },50);
}