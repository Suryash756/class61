canvas= document.getElementById("canvas1");
ctx=canvas.getContext("2d");

color="blue";
//this for drawing any shape
//in method or pre defined funtione requires plain brackets
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
// this statment is used to draw circle 
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

color="black";
//this for drawing any shape
//in method or pre defined funtione requires plain brackets
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
// this statment is used to draw circle 
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

color="red";
//this for drawing any shape
//in method or pre defined funtione requires plain brackets
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
// this statment is used to draw circle 
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

color="green";
//this for drawing any shape
//in method or pre defined funtione requires plain brackets
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
// this statment is used to draw circle 
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();

color="red";
//this for drawing any shape
//in method or pre defined funtione requires plain brackets
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
// this statment is used to draw circle 
ctx.arc(255,250,40,0,2*Math.PI);
ctx.stroke();

color_rect="black";
ctx.beginPath();
ctx.strokeStyle=color_rect;
ctx.lineWidth=5;
ctx.rect(100,100,400,250);
ctx.stroke();

