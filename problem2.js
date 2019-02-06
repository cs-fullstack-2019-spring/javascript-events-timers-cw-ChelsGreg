// problem 2 variables for function

let clickHere = document.getElementById("clickHere");
let textArea = document.getElementById("typeHere");
let hiddenMessage = document.querySelector("p");

let enableType = false;

// problem 2 function to enable/disable text area

clickHere.addEventListener("click", function(e)
{
    console.log("test");

    if(enableType)
    {
        textArea.setAttribute("disabled", "");
        hiddenMessage.textContent = "";
        enableType = false;
    }

    else
    {
        textArea.removeAttribute("disabled");
        hiddenMessage.textContent = "Start Typing!";
        enableType = true;
    }


});



// problem 3 variables for function

var countButton = document.getElementById("countDown");
var count10 = "";
var startLift = 10;


// button function to count down

countButton.addEventListener("click", clickThis);

function liftOff()
{
    console.log(startLift);
    startLift -= 1;
    if(startLift===0)
    {clearInterval(count10);
    console.log("Lift Off!");}

}

function clickThis()
{
    count10 =  window.setInterval(liftOff, 1000);

}






