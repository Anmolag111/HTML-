/*var name=prompt("What is your name?");
var fname=prompt("What is your fathers name?");
var mname=prompt("What is your mothers name?");

alert("HII"+name+", "+fname+" ");
console.log("Hii"+name);*/
/*var h1=document.querySelector("h1");
h1.style.color="pink";*/
/*
var body=document.querySelector("body");
var isBlue=false;
setInterval(function()
{
if(isBlue)
	{body.style.background="white";}
else
{
	body.style.background="blue";
}
	isBlue=!isBlue;
},5000);*/

var p=document.querySelector("p");
p.style.color="pink";
var li=document.querySelectorAll("li");
for(var i=0;i<li.length;i++)  
     {li[i].addEventListener("click",function(){   
         this.style.color="pink";});}
