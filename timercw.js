// creating variable for checkbox
var dontClick = document.querySelector("#checkbox");


// function if checkbox is clicked
function preventClick(e)
{
    console.log("test");
    alert("I TOLD YOU NOT TO CLICK THIS!");
    e.preventDefault();
}

dontClick.addEventListener ("click", preventClick);