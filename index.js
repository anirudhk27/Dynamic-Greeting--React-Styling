//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
var greeting;
var stylobj={color:"red"};
const d = new Date();
var hr=d.getHours();
if(hr<12)
{
    greeting="Good Moring";
}
else if(hr>12 && hr<18)
{
    greeting="Good EVening";
    stylobj.color="green";
}
else
{
    greeting="Good Night";
    stylobj.color="blue"
}

ReactDOM.render(
    <div>
        <h1 style={stylobj}>{greeting}</h1>  
    </div>,document.getElementById("root"));