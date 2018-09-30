//how to code time
function GetClock(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes();
if(nmin<=9) nmin="0"+nmin
var clocktext=""+nhour+":"+nmin+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);








/*
//variables
var button = document.getElementById('button');
var input = document.getElementById('input');
var ol = document.querySelector("ol");

//functions

function inputLength(){
  return input.value.length;
}

function addListItem(){
  var li = document.createElement("li")
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = "";
}

button.addEventListener("click", function(click){
  if (inputLength() >0) {
    addListItem();
  }
})

input.addEventListener("keypress", function(enter){
  if (inputLength() > 0 && enter.keyCode === 13) {
    addListItem();
    }
})
*/
