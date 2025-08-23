// document.getElementById("user_button1").style.backgroundColor="green;"

// function changeColoToRed(){
//   document.getElementById("user_button1").style.backgroundColor="red";

// }


let red_btn=document.getElementById("user_button1")
let yellow_btn=document.getElementById("user_button2")
let green_btn=document.getElementById("user_button3")
let msg=document.getElementById("msg")



function rest_light(){
    red_btn.style.backgroundColor="black";
    yellow_btn.style.backgroundColor="black";
    green_btn.style.backgroundColor="black";
    msg.innerText="";
   
}

let step = 0;
let interval = setInterval(function(){
  rest_light()
if (step===0)  {
    red_btn.style.backgroundColor="red";
    msg.innerText="Stop";
     document.getElementById("msg").style.color="red"

}
else if(step===1){
    yellow_btn.style.backgroundColor="yellow";
     msg.innerText="Get Ready";
     document.getElementById("msg").style.color="yellow"

}
else if(step===2){
    green_btn.style.backgroundColor="green";
     msg.innerText="Go";
     document.getElementById("msg").style.color="green"
}

step++;
if (step > 2){
  step=0;
}

},3000);